import { useState, useMemo } from 'react';
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
  const [activeExercise, setActiveExercise] = useState(0);
  const { saveSubmission, getLocalData, saving } = useSubmission(participantId);

  const cu = sprint2Data;

  const completedIndexes = useMemo(() => {
    const set = new Set<number>();
    cu.exercises.forEach((ex, i) => {
      const local = getLocalData(ex.id);
      if (local?.completed) set.add(i);
    });
    return set;
  }, [activeExercise, getLocalData, cu.exercises]);

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
          sprintTitle="Sprint 2 — Challenge collectif"
          sprintColor="#F59E0B"
          exercisesCompleted={cu.exercises.length}
          nextSprintLabel="Sprint 3 — Agent Lite"
        />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <SprintHeader
        title="Sprint 2 — Challenge collectif"
        color="#F59E0B"
        duration={sprint2Meta.duration}
        currentStep={activeExercise + 1}
        totalSteps={cu.exercises.length}
      />

      <CopilotLink color="#F59E0B" />

      <div className="text-[11px] font-display font-bold text-sprint-2 uppercase tracking-wider mb-4">
        {cu.title}
      </div>

      <ConsignesPanel consignes={cu.consignes} />

      <Stepper
        steps={cu.exercises.map((_, i) => ({ id: `ex-${i}`, label: `Exercice ${i + 1}` }))}
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
          saving={saving}
        />
      </div>
    </div>
  );
}
