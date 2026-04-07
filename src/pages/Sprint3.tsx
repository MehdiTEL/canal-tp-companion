import { useState, useMemo } from 'react';
import { SprintHeader } from '../components/shared/SprintHeader';
import { ExerciseCard } from '../components/shared/ExerciseCard';
import { SprintRecap } from '../components/shared/SprintRecap';
import { CopilotLink } from '../components/shared/CopilotLink';
import { ConsignesPanel } from '../components/shared/ConsignesPanel';
import { Stepper } from '../components/shared/Stepper';
import { AgentBuilder } from '../components/sprint3/AgentBuilder';
import { sprint3Meta, sprint3ByGroup } from '../data/sprint3';
import { getGroupForMetier } from '../data/metierGroups';
import { useSubmission } from '../hooks/useSubmission';

interface Sprint3Props {
  participantId?: string;
  metier: string;
}

export function Sprint3({ participantId, metier }: Sprint3Props) {
  const [activeExercise, setActiveExercise] = useState(0);
  const { saveSubmission, getLocalData, saving } = useSubmission(participantId);

  const groupId = getGroupForMetier(metier);
  const cu = sprint3ByGroup[groupId];

  const completedIndexes = useMemo(() => {
    const set = new Set<number>();
    cu.exercises.forEach((ex, i) => {
      const local = getLocalData(ex.id);
      if (local?.completed) set.add(i);
    });
    return set;
  }, [activeExercise, getLocalData, cu.exercises]);

  // Prevent skipping ahead
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
          sprintTitle="Sprint 3 — Agent Lite"
          sprintColor="#8B5CF6"
          exercisesCompleted={cu.exercises.length}
          nextSprintLabel={null}
          message="Felicitations ! Vous avez termine l'ensemble du parcours."
        />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <SprintHeader
        title="Sprint 3 — Agent Lite"
        color="#8B5CF6"
        duration={sprint3Meta.duration}
        currentStep={activeExercise + 1}
        totalSteps={cu.exercises.length}
      />

      <CopilotLink color="#8B5CF6" />

      <div className="text-[11px] font-display font-bold text-sprint-3 uppercase tracking-wider mb-4">
        {cu.title}
      </div>

      {/* Consignes — above exercises */}
      <ConsignesPanel consignes={cu.consignes} />

      {/* Agent Builder — only on exercise 1 */}
      {activeExercise === 0 && <AgentBuilder />}

      {/* Stepper */}
      <Stepper
        steps={cu.exercises.map((_, i) => ({ id: `ex-${i}`, label: `Exercice ${i + 1}` }))}
        currentIndex={activeExercise}
        completedIndexes={completedIndexes}
        color="#8B5CF6"
        onStepClick={(i) => {
          if (i <= maxAccessibleStep) setActiveExercise(i);
        }}
      />

      <div key={cu.exercises[activeExercise].id} className="animate-slide-in-right">
        <ExerciseCard
          exercise={cu.exercises[activeExercise]}
          sprintId="sprint-3"
          sprintColor="#8B5CF6"
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
