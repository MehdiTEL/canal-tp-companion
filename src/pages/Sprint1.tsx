import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SprintHeader } from '../components/shared/SprintHeader';
import { ExerciseCard } from '../components/shared/ExerciseCard';
import { SprintRecap } from '../components/shared/SprintRecap';
import { CopilotLink } from '../components/shared/CopilotLink';
import { Stepper } from '../components/shared/Stepper';
import { sprint1Meta, sprint1Scenario } from '../data/sprint1';
import { useSubmission } from '../hooks/useSubmission';

interface Sprint1Props {
  participantId?: string;
}

export function Sprint1({ participantId }: Sprint1Props) {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const { saveSubmission, getLocalData } = useSubmission(participantId);

  const scenario = sprint1Scenario;
  const step = scenario.steps[currentStep];

  const completedIndexes = useMemo(() => {
    const set = new Set<number>();
    scenario.steps.forEach((s, i) => {
      const local = getLocalData(s.id);
      if (local?.completed) set.add(i);
    });
    return set;
  }, [getLocalData, scenario.steps]);

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
          sprintTitle={t('sprints.sprint1')}
          sprintColor="#2563EB"
          exercisesCompleted={scenario.steps.length}
          nextSprintLabel={t('sprints.sprint2')}
        />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      <SprintHeader
        title={t('sprints.sprint1')}
        color="#2563EB"
        duration={sprint1Meta.duration}
        currentStep={completedIndexes.size}
        totalSteps={scenario.steps.length}
        subtitle={scenario.description}
      />

      <CopilotLink color="#2563EB" />

      <Stepper
        steps={scenario.steps.map((s, i) => ({ id: s.id, label: `${t('sprint1.step', { n: i + 1 })} — ${s.title}` }))}
        currentIndex={currentStep}
        completedIndexes={completedIndexes}
        color="#2563EB"
        onStepClick={(i) => {
          if (i <= maxAccessibleStep) setCurrentStep(i);
        }}
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
            isLastStep={currentStep === scenario.steps.length - 1}
          />
        </div>
      )}
    </div>
  );
}
