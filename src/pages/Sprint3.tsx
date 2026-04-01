import { useState, useMemo } from 'react';
import { SprintHeader } from '../components/shared/SprintHeader';
import { ExerciseCard } from '../components/shared/ExerciseCard';
import { CopilotLink } from '../components/shared/CopilotLink';
import { ConsignesPanel } from '../components/shared/ConsignesPanel';
import { Stepper } from '../components/shared/Stepper';
import { AgentBuilder } from '../components/sprint3/AgentBuilder';
import { sprint3Data } from '../data/sprint3';
import { useSubmission } from '../hooks/useSubmission';

interface Sprint3Props {
  participantId?: string;
}

export function Sprint3({ participantId }: Sprint3Props) {
  const [activeExercise, setActiveExercise] = useState(0);
  const { saveSubmission, getLocalData, saving } = useSubmission(participantId);

  // Use the first cas d'usage directly (single cas for all metiers)
  const cu = sprint3Data.casUsages[0];

  const completedIndexes = useMemo(() => {
    const set = new Set<number>();
    cu.exercises.forEach((ex, i) => {
      const local = getLocalData(ex.id);
      if (local?.completed) set.add(i);
    });
    return set;
  }, [activeExercise]);

  return (
    <div className="max-w-5xl mx-auto">
      <SprintHeader
        title="Sprint 3 — Agent Lite"
        color="#8B5CF6"
        duration={sprint3Data.duration}
        currentStep={activeExercise + 1}
        totalSteps={cu.exercises.length}
        onBack={activeExercise > 0 ? () => setActiveExercise(activeExercise - 1) : undefined}
        backLabel="Exercice precedent"
      />

      <CopilotLink color="#8B5CF6" />

      <div className="text-[11px] font-display font-bold text-sprint-3 uppercase tracking-wider mb-4">
        {cu.title}
      </div>

      {/* Side-by-side layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main zone */}
        <div className="flex-1 lg:max-w-[65%] space-y-5">
          {/* Agent Builder — only on exercise 1 */}
          {activeExercise === 0 && <AgentBuilder />}

          {/* Stepper */}
          <Stepper
            steps={cu.exercises.map((_, i) => ({ id: `ex-${i}`, label: `Exercice ${i + 1}` }))}
            currentIndex={activeExercise}
            completedIndexes={completedIndexes}
            color="#8B5CF6"
            onStepClick={setActiveExercise}
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

        {/* Consignes */}
        <div className="lg:w-[35%] lg:sticky lg:top-[70px] lg:self-start">
          <ConsignesPanel consignes={cu.consignes} />
        </div>
      </div>
    </div>
  );
}
