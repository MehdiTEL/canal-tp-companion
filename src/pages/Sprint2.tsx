import { useState, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SprintHeader } from '../components/shared/SprintHeader';
import { ExerciseCard } from '../components/shared/ExerciseCard';
import { SprintRecap } from '../components/shared/SprintRecap';
import { CopilotLink } from '../components/shared/CopilotLink';
import { ConsignesPanel } from '../components/shared/ConsignesPanel';
import { Stepper } from '../components/shared/Stepper';
import { sprint2Meta, sprint2Data } from '../data/sprint2';
import { useSubmission } from '../hooks/useSubmission';

interface Sprint2Props {
  participantId?: string;
}

export function Sprint2({ participantId }: Sprint2Props) {
  const { t } = useTranslation();
  const [activeExercise, setActiveExercise] = useState(0);
  const [timerExpired, setTimerExpired] = useState(false);
  const handleTimerState = useCallback((expired: boolean) => setTimerExpired(expired), []);
  const { saveSubmission, getLocalData } = useSubmission(participantId);

  const cu = sprint2Data;

  const completedIndexes = useMemo(() => {
    const set = new Set<number>();
    cu.exercises.forEach((ex, i) => {
      const local = getLocalData(ex.id);
      if (local?.completed) set.add(i);
    });
    return set;
  }, [getLocalData, cu.exercises]);

  const maxAccessibleStep = useMemo(() => {
    let max = 0;
    for (let i = 0; i < cu.exercises.length; i++) {
      if (completedIndexes.has(i)) {
        max = i + 1;
      } else {
        break;
      }
    }
    return max;
  }, [completedIndexes, cu.exercises.length]);

  const allCompleted = completedIndexes.size === cu.exercises.length;
  if (allCompleted) {
    return (
      <div className="max-w-3xl mx-auto py-8">
        <SprintRecap
          sprintTitle={t('sprints.sprint2')}
          sprintColor="#F59E0B"
          exercisesCompleted={cu.exercises.length}
          nextSprintLabel={t('sprints.sprint3')}
          timerExpired={timerExpired}
        />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      <SprintHeader
        title={t('sprints.sprint2')}
        color="#F59E0B"
        duration={sprint2Meta.duration}
        currentStep={completedIndexes.size}
        totalSteps={cu.exercises.length}
        subtitle={cu.description}
        onTimerStateChange={handleTimerState}
      />

      <CopilotLink color="#F59E0B" />

      <ConsignesPanel consignes={cu.consignes} />

      <Stepper
        steps={cu.exercises.map((ex, i) => ({ id: ex.id, label: `${t('sprint2.exercise', { n: i + 1 })} — ${ex.title}` }))}
        currentIndex={activeExercise}
        completedIndexes={completedIndexes}
        color="#F59E0B"
        onStepClick={(i) => {
          if (i <= maxAccessibleStep) setActiveExercise(i);
        }}
      />

      <div key={cu.exercises[activeExercise].id} className="animate-slide-in-right">
        <ExerciseCard
          exercise={cu.exercises[activeExercise]}
          sprintId="sprint-2"
          sprintColor="#F59E0B"
          initialData={getLocalData(cu.exercises[activeExercise].id)}
          onSave={saveSubmission}
          onComplete={() => {
            if (activeExercise < cu.exercises.length - 1) {
              setActiveExercise(activeExercise + 1);
            }
          }}
          showRating={true}
          isLastStep={activeExercise === cu.exercises.length - 1}
        />
      </div>
    </div>
  );
}
