import { useState } from 'react';
import { SprintHeader } from '../components/shared/SprintHeader';
import { ExerciseCard } from '../components/shared/ExerciseCard';
import { SprintRecap } from '../components/shared/SprintRecap';
import { CopilotLink } from '../components/shared/CopilotLink';
import {
  echauffementMeta,
  echauffementDescription,
  echauffementThematiques,
  echauffementExercise,
} from '../data/echauffement';
import { useSubmission } from '../hooks/useSubmission';

interface EchauffementProps {
  participantId?: string;
}

export function Echauffement({ participantId }: EchauffementProps) {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const { saveSubmission, getLocalData, saving } = useSubmission(participantId);

  const localData = getLocalData('echauffement-ex1');
  const completed = localData?.completed || false;

  if (completed && !selectedTheme) {
    return (
      <div className="max-w-3xl mx-auto py-8">
        <SprintRecap
          sprintTitle="Echauffement"
          sprintColor="#06B6D4"
          exercisesCompleted={1}
          nextSprintLabel="Sprint 1 — Cas pratique"
          message="Bien joue ! L'echauffement est termine."
        />
      </div>
    );
  }

  const themeName = echauffementThematiques.find(t => t.id === selectedTheme)?.label;

  const exercise = {
    ...echauffementExercise,
    description: selectedTheme
      ? `Utilisez Copilot Chat pour explorer "${themeName}" et produire une synthese exploitable en 5 minutes.`
      : echauffementExercise.description,
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <SprintHeader
        title="Echauffement"
        color="#06B6D4"
        duration={echauffementMeta.duration}
        currentStep={1}
        totalSteps={1}
      />

      {/* Consigne */}
      <div className="rounded-lg bg-surface-elevated border-l-[3px] border-sprint-warmup px-4 py-3.5">
        <span className="inline-block text-[9px] font-display font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded mb-2 text-white bg-sprint-warmup">
          Consigne
        </span>
        <p className="text-[14px] text-text-body font-body leading-relaxed">
          {echauffementDescription}
        </p>
      </div>

      <CopilotLink color="#06B6D4" />

      {/* Theme selection */}
      <div>
        <p className="text-[13px] font-semibold text-text-body tracking-wide mb-2.5">
          Choisissez votre thematique
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {echauffementThematiques.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setSelectedTheme(theme.id)}
              className={`text-left px-3.5 py-2.5 rounded-md border text-[14px] font-body transition-all duration-fast active:scale-[0.98] ${
                selectedTheme === theme.id
                  ? 'border-sprint-warmup bg-sprint-warmup/8 text-text-on-light font-semibold shadow-card'
                  : 'border-border-default bg-surface-card text-text-body hover:border-sprint-warmup/40 hover:bg-surface-card'
              }`}
            >
              {theme.label}
            </button>
          ))}
        </div>
      </div>

      {/* Exercise */}
      {selectedTheme && (
        <ExerciseCard
          exercise={exercise}
          sprintId="echauffement"
          sprintColor="#06B6D4"
          initialData={localData}
          onSave={saveSubmission}
          onComplete={() => {}}
          showRating={false}
          saving={saving}
        />
      )}
    </div>
  );
}
