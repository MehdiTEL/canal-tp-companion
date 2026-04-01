import { useState, useMemo } from 'react';
import { SprintHeader } from '../components/shared/SprintHeader';
import { ExerciseCard } from '../components/shared/ExerciseCard';
import { CopilotLink } from '../components/shared/CopilotLink';
import { Stepper } from '../components/shared/Stepper';
import { sprint1Data } from '../data/sprint1';
import { useSubmission } from '../hooks/useSubmission';

interface Sprint1Props {
  participantId?: string;
}

export function Sprint1({ participantId }: Sprint1Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const { saveSubmission, getLocalData, saving } = useSubmission(participantId);

  // Use the first scenario directly (single cas d'usage for all metiers)
  const scenario = sprint1Data.scenarios[0];
  const step = scenario.steps[currentStep];

  const completedIndexes = useMemo(() => {
    const set = new Set<number>();
    scenario.steps.forEach((s, i) => {
      const local = getLocalData(s.id);
      if (local?.completed) set.add(i);
    });
    return set;
  }, [currentStep]);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <SprintHeader
        title="Sprint 1 — Cas pratique"
        color="#2563EB"
        duration={sprint1Data.duration}
        currentStep={currentStep + 1}
        totalSteps={scenario.steps.length}
        onBack={currentStep > 0 ? () => setCurrentStep(currentStep - 1) : undefined}
        backLabel="Etape precedente"
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
        onStepClick={setCurrentStep}
      />

      {step && (
        <div key={step.id} className="animate-slide-in-right">
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
