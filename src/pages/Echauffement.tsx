import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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

const THEME_KEY = 'canal-tp-echauffement-theme';

export function Echauffement({ participantId }: EchauffementProps) {
  const { t } = useTranslation();
  const [selectedTheme, setSelectedTheme] = useState<string | null>(() => localStorage.getItem(THEME_KEY));
  const { saveSubmission, getLocalData } = useSubmission(participantId);

  const localData = getLocalData('echauffement-ex1');
  const completed = localData?.completed || false;

  if (completed && !selectedTheme) {
    return (
      <div className="max-w-3xl mx-auto py-8">
        <SprintRecap
          sprintTitle={t('sprints.echauffement')}
          sprintColor="#06B6D4"
          exercisesCompleted={1}
          nextSprintLabel={t('sprints.sprint1')}
          message={t('echauffement.completedMessage')}
        />
      </div>
    );
  }

  const themeName = echauffementThematiques.find(t => t.id === selectedTheme)?.label;

  const exercise = {
    ...echauffementExercise,
    description: selectedTheme
      ? `${t('exercise.consigne')} : ${themeName}`
      : echauffementExercise.description,
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <SprintHeader
        title={t('sprints.echauffement')}
        color="#06B6D4"
        duration={echauffementMeta.duration}
        currentStep={completed ? 1 : 0}
        totalSteps={1}
      />

      {/* Consigne */}
      <div className="rounded-lg bg-surface-elevated border-l-[3px] border-sprint-warmup px-4 py-3.5">
        <span className="inline-block text-[9px] font-display font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded mb-2 text-white bg-sprint-warmup">
          {t('echauffement.consigne')}
        </span>
        <p className="text-[14px] text-text-body font-body leading-relaxed">
          {echauffementDescription}
        </p>
      </div>

      <CopilotLink color="#06B6D4" />

      {/* Theme selection */}
      <div>
        <p className="text-[13px] font-semibold text-text-body tracking-wide mb-2.5">
          {t('echauffement.chooseTheme')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {echauffementThematiques.map((theme) => (
            <button
              key={theme.id}
              onClick={() => { setSelectedTheme(theme.id); localStorage.setItem(THEME_KEY, theme.id); }}
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
        />
      )}
    </div>
  );
}
