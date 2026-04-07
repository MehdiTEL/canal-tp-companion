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
    <div className="max-w-3xl mx-auto space-y-5">
      <SprintHeader
        title={t('sprints.echauffement')}
        color="#06B6D4"
        duration={echauffementMeta.duration}
        currentStep={completed ? 1 : 0}
        totalSteps={1}
        subtitle={echauffementDescription}
      />

      {/* Step 1 — Choose theme */}
      <div className="bg-white rounded-xl border border-border-default shadow-card p-5">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-7 h-7 rounded-full bg-sprint-warmup flex items-center justify-center text-[12px] font-display font-bold text-white">
            1
          </div>
          <h3 className="text-[15px] font-display font-bold text-text-on-light">
            {t('echauffement.chooseTheme')}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {echauffementThematiques.map((theme) => (
            <button
              key={theme.id}
              onClick={() => { setSelectedTheme(theme.id); localStorage.setItem(THEME_KEY, theme.id); }}
              className={`text-left px-4 py-3 rounded-xl border-2 text-[14px] font-body transition-all duration-base active:scale-[0.98] ${
                selectedTheme === theme.id
                  ? 'border-sprint-warmup bg-sprint-warmup/8 text-text-on-light font-semibold shadow-card'
                  : 'border-border-default bg-white text-text-body hover:border-sprint-warmup/40 hover:shadow-card'
              }`}
            >
              {theme.label}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2 — Open Copilot */}
      {selectedTheme && (
        <div className="bg-white rounded-xl border border-border-default shadow-card p-5 animate-slide-up">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-7 h-7 rounded-full bg-sprint-warmup flex items-center justify-center text-[12px] font-display font-bold text-white">
              2
            </div>
            <h3 className="text-[15px] font-display font-bold text-text-on-light">
              {t('echauffement.openCopilot')}
            </h3>
          </div>
          <CopilotLink color="#06B6D4" />
        </div>
      )}

      {/* Step 3 — Exercise */}
      {selectedTheme && (
        <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center gap-2.5 mb-3">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-display font-bold text-white ${completed ? 'bg-success' : 'bg-sprint-warmup'}`}>
              3
            </div>
            <h3 className="text-[15px] font-display font-bold text-text-on-light">
              {t('echauffement.doExercise')}
            </h3>
          </div>
          <ExerciseCard
            exercise={exercise}
            sprintId="echauffement"
            sprintColor="#06B6D4"
            initialData={localData}
            onSave={saveSubmission}
            onComplete={() => {}}
            showRating={false}
          />
        </div>
      )}
    </div>
  );
}
