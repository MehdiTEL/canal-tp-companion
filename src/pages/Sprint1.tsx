import { useState, useMemo } from 'react';
import { SprintHeader } from '../components/shared/SprintHeader';
import { ExerciseCard } from '../components/shared/ExerciseCard';
import { SprintRecap } from '../components/shared/SprintRecap';
import { CopilotLink } from '../components/shared/CopilotLink';
import { DocumentPanel } from '../components/shared/DocumentPanel';
import { Stepper } from '../components/shared/Stepper';
import { sprint1Meta, sprint1ByGroup } from '../data/sprint1';
import { getGroupForMetier } from '../data/metierGroups';
import { useSubmission } from '../hooks/useSubmission';

interface Sprint1Props {
  participantId?: string;
  metier: string;
}

export function Sprint1({ participantId, metier }: Sprint1Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const { saveSubmission, getLocalData, saving } = useSubmission(participantId);

  const groupId = getGroupForMetier(metier);
  const { scenario, documents } = sprint1ByGroup[groupId];
  const step = scenario.steps[currentStep];

  // Documents for the current step
  const stepDocuments = documents.filter(d => d.stepId === step.id);

  const completedIndexes = useMemo(() => {
    const set = new Set<number>();
    scenario.steps.forEach((s, i) => {
      const local = getLocalData(s.id);
      if (local?.completed) set.add(i);
    });
    return set;
  }, [currentStep, getLocalData, scenario.steps]);

  // Prevent skipping ahead
  const maxAccessibleStep = useMemo(() => {
    let max = 0;
    for (let i = 0; i < scenario.steps.length; i++) {
      if (completedIndexes.has(i)) {
        max = i + 1;
      } else {
        break;
      }
    }
    return max;
  }, [completedIndexes, scenario.steps.length]);

  const allCompleted = completedIndexes.size === scenario.steps.length;
  if (allCompleted) {
    return (
      <div className="max-w-3xl mx-auto py-8">
        <SprintRecap
          sprintTitle="Sprint 1 — Cas pratique"
          sprintColor="#2563EB"
          exercisesCompleted={scenario.steps.length}
          nextSprintLabel="Sprint 2 — Challenge collectif"
        />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <SprintHeader
        title="Sprint 1 — Cas pratique"
        color="#2563EB"
        duration={sprint1Meta.duration}
        currentStep={currentStep + 1}
        totalSteps={scenario.steps.length}
      />

      <CopilotLink color="#2563EB" />

      <div className="text-[11px] font-display font-bold text-sprint-1 uppercase tracking-wider">
        {scenario.title}
      </div>

      {/* Stepper */}
      <Stepper
        steps={scenario.steps.map((s, i) => ({ id: s.id, label: `Etape ${i + 1}` }))}
        currentIndex={currentStep}
        completedIndexes={completedIndexes}
        color="#2563EB"
        onStepClick={(i) => {
          if (i <= maxAccessibleStep) setCurrentStep(i);
        }}
      />

      {step && (
        <div key={step.id} className="animate-slide-in-right space-y-4">
          {/* Document panel for this step */}
          {stepDocuments.map(doc => (
            <DocumentPanel key={doc.id} document={doc} color="#2563EB" />
          ))}

          <ExerciseCard
            exercise={step}
            sprintId="sprint-1"
            sprintColor="#2563EB"
            initialData={getLocalData(step.id)}
            onSave={saveSubmission}
            onComplete={() => {
              if (currentStep < scenario.steps.length - 1) {
                setCurrentStep(currentStep + 1);
              }
            }}
            saving={saving}
          />
        </div>
      )}
    </div>
  );
}
