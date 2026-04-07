import { useTranslation } from 'react-i18next';
import { SprintHeader } from '../components/shared/SprintHeader';
import { ExerciseCard } from '../components/shared/ExerciseCard';
import { SprintRecap } from '../components/shared/SprintRecap';
import { CopilotLink } from '../components/shared/CopilotLink';
import {
  echauffementMeta,
  echauffementDescription,
  echauffementExercise,
} from '../data/echauffement';
import { useSubmission } from '../hooks/useSubmission';

interface EchauffementProps {
  participantId?: string;
}

export function Echauffement({ participantId }: EchauffementProps) {
  const { t } = useTranslation();
  const { saveSubmission, getLocalData } = useSubmission(participantId);

  const localData = getLocalData('echauffement-ex1');
  const completed = localData?.completed || false;

  if (completed) {
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

      {/* Step 1 — Open Copilot */}
      <div className="bg-white rounded-xl border border-border-default shadow-card p-5">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-7 h-7 rounded-full bg-sprint-warmup flex items-center justify-center text-[12px] font-display font-bold text-white">
            1
          </div>
          <h3 className="text-[15px] font-display font-bold text-text-on-light">
            {t('echauffement.openCopilot')}
          </h3>
        </div>
        <CopilotLink color="#06B6D4" />
      </div>

      {/* Step 2 — Exercise */}
      <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-7 h-7 rounded-full bg-sprint-warmup flex items-center justify-center text-[12px] font-display font-bold text-white">
            2
          </div>
          <h3 className="text-[15px] font-display font-bold text-text-on-light">
            {t('echauffement.doExercise')}
          </h3>
        </div>
        <ExerciseCard
          exercise={echauffementExercise}
          sprintId="echauffement"
          sprintColor="#06B6D4"
          initialData={localData}
          onSave={saveSubmission}
          onComplete={() => {}}
          showRating={false}
        />
      </div>
    </div>
  );
}
