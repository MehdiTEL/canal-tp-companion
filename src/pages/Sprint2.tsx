import { useState, useMemo } from 'react';
import { SprintHeader } from '../components/shared/SprintHeader';
import { ExerciseCard } from '../components/shared/ExerciseCard';
import { CopilotLink } from '../components/shared/CopilotLink';
import { ConsignesPanel } from '../components/shared/ConsignesPanel';
import { Stepper } from '../components/shared/Stepper';
import { sprint2Data } from '../data/sprint2';
import { useSubmission } from '../hooks/useSubmission';

interface Sprint2Props {
  participantId?: string;
}

export function Sprint2({ participantId }: Sprint2Props) {
  const [activeExercise, setActiveExercise] = useState(0);
  const { saveSubmission, getLocalData, saving } = useSubmission(participantId);

  // Use the first cas d'usage directly (single cas for all metiers)
  const cu = sprint2Data.casUsages[0];

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
        title="Sprint 2 — Challenge collectif"
        color="#F59E0B"
        duration={sprint2Data.duration}
        currentStep={activeExercise + 1}
        totalSteps={cu.exercises.length}
        onBack={activeExercise > 0 ? () => setActiveExercise(activeExercise - 1) : undefined}
        backLabel="Exercice precedent"
      />

      <CopilotLink color="#F59E0B" />

      <div className="text-[11px] font-display font-bold text-sprint-2 uppercase tracking-wider mb-4">
        {cu.title}
      </div>

      {/* Side-by-side layout on desktop */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main exercise zone — 65% */}
        <div className="flex-1 lg:max-w-[65%] space-y-5">
          {/* Stepper */}
          <Stepper
            steps={cu.exercises.map((_, i) => ({ id: `ex-${i}`, label: `Exercice ${i + 1}` }))}
            currentIndex={activeExercise}
            completedIndexes={completedIndexes}
            color="#F59E0B"
            onStepClick={setActiveExercise}
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

        {/* Consignes panel — 35% */}
        <div className="lg:w-[35%] lg:sticky lg:top-[70px] lg:self-start">
          <ConsignesPanel consignes={cu.consignes} />
        </div>
      </div>
    </div>
  );
}
