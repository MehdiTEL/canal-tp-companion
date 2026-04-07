import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Trophy, ArrowRight, Home, Sparkles } from 'lucide-react';

interface SprintRecapProps {
  sprintTitle: string;
  sprintColor: string;
  exercisesCompleted: number;
  nextSprintLabel?: string | null;
  message?: string;
}

export function SprintRecap({
  sprintTitle,
  sprintColor,
  exercisesCompleted,
  nextSprintLabel,
  message,
}: SprintRecapProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const encouragements = t('recap.encouragements', { returnObjects: true }) as string[];
  const encouragement = message || encouragements[Math.floor(Math.random() * encouragements.length)];

  return (
    <div className="max-w-lg mx-auto animate-slide-up">
      <div className="bg-white rounded-2xl shadow-elevated border border-border-subtle/50 overflow-hidden">
        <div
          className="px-6 py-8 text-center relative overflow-hidden"
          style={{ backgroundColor: sprintColor }}
        >
          <Sparkles
            size={80}
            className="absolute top-2 right-4 text-white/10 animate-pulse-soft"
            strokeWidth={1}
          />
          <Sparkles
            size={40}
            className="absolute bottom-3 left-6 text-white/15 animate-pulse-soft"
            strokeWidth={1}
            style={{ animationDelay: '500ms' }}
          />

          <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-4 animate-recap-trophy">
            <Trophy size={32} className="text-white" />
          </div>

          <h2 className="text-2xl font-display font-extrabold text-white tracking-tight">
            {sprintTitle}
          </h2>
          <p className="text-white/80 font-body text-[15px] mt-1">
            {t('recap.completedSubtitle')}
          </p>
        </div>

        <div className="px-6 py-6 space-y-5">
          <div className="text-center">
            <p className="text-[20px] font-display font-bold text-text-on-light animate-fade-in">
              {encouragement}
            </p>
          </div>

          <div className="flex items-center justify-center gap-6">
            <div className="text-center">
              <span
                className="text-[28px] font-display font-extrabold leading-none"
                style={{ color: sprintColor }}
              >
                {exercisesCompleted}
              </span>
              <p className="text-[12px] text-text-muted font-body mt-1">
                {exercisesCompleted > 1 ? t('recap.exercisesCompleted_other') : t('recap.exercisesCompleted_one')}
              </p>
            </div>
            <div className="w-px h-10 bg-border-default" />
            <div className="text-center">
              <span
                className="text-[28px] font-display font-extrabold leading-none"
                style={{ color: sprintColor }}
              >
                100%
              </span>
              <p className="text-[12px] text-text-muted font-body mt-1">
                {t('recap.progression')}
              </p>
            </div>
          </div>

          {nextSprintLabel && (
            <div
              className="rounded-lg px-4 py-3 text-center"
              style={{ backgroundColor: `${sprintColor}08`, border: `1px solid ${sprintColor}20` }}
            >
              <p className="text-[13px] font-body text-text-body">
                {t('recap.nextModule')}{' '}
                <span className="font-semibold" style={{ color: sprintColor }}>
                  {nextSprintLabel}
                </span>
              </p>
              <p className="text-[12px] text-text-muted font-body mt-0.5">
                {t('recap.nextModuleHint')}
              </p>
            </div>
          )}

          {nextSprintLabel === null && (
            <div className="rounded-lg px-4 py-3 text-center bg-success/5 border border-success/20">
              <p className="text-[14px] font-body font-semibold text-success">
                {t('recap.allDone')}
              </p>
              <p className="text-[12px] text-text-muted font-body mt-0.5">
                {t('recap.allDoneMessage')}
              </p>
            </div>
          )}

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-white font-display font-bold text-[15px] hover:opacity-90 active:scale-[0.98] transition-all duration-base shadow-card"
              style={{ backgroundColor: sprintColor }}
            >
              <Home size={16} />
              {t('recap.backDashboard')}
            </button>
            {nextSprintLabel && (
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border font-display font-semibold text-[14px] hover:bg-surface-elevated active:scale-[0.98] transition-all duration-base"
                style={{ borderColor: `${sprintColor}30`, color: sprintColor }}
              >
                {t('recap.seeProgress')}
                <ArrowRight size={15} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
