import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Flame, FileText, Zap, Bot, ChevronRight, CheckCircle2, Lock, LockOpen, RotateCcw, BookOpen, FolderOpen, Lightbulb } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';

interface DashboardProps {
  onChangeMetier?: () => void;
}

export function Dashboard({ onChangeMetier }: DashboardProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { globalProgress, getSprintCompletion, isSprintStarted, isSprintUnlocked, justUnlocked } = useProgress();

  const sprints = [
    {
      id: 'echauffement',
      path: '/echauffement',
      title: t('sprints.echauffement'),
      subtitle: t('sprints.echauffementSub'),
      duration: '10 min',
      icon: Flame,
      color: '#06B6D4',
      gradient: 'from-cyan-500 to-cyan-600',
    },
    {
      id: 'sprint-1',
      path: '/sprint-1',
      title: t('sprints.sprint1'),
      subtitle: t('sprints.sprint1Sub'),
      duration: '25 min',
      icon: FileText,
      color: '#2563EB',
      gradient: 'from-blue-500 to-blue-600',
      requires: t('sprints.reqEchauffement'),
    },
    {
      id: 'sprint-2',
      path: '/sprint-2',
      title: t('sprints.sprint2'),
      subtitle: t('sprints.sprint2Sub'),
      duration: '30 min',
      icon: Zap,
      color: '#F59E0B',
      gradient: 'from-amber-400 to-amber-500',
      requires: t('sprints.reqSprint1'),
    },
    {
      id: 'sprint-3',
      path: '/sprint-3',
      title: t('sprints.sprint3'),
      subtitle: t('sprints.sprint3Sub'),
      duration: '30 min',
      icon: Bot,
      color: '#8B5CF6',
      gradient: 'from-violet-500 to-violet-600',
      requires: t('sprints.reqSprint2'),
    },
  ];

  // Find the first sprint to continue (started but not complete, or first unlocked not started)
  const nextSprint = sprints.find((s) => {
    const unlocked = isSprintUnlocked(s.id);
    const completion = getSprintCompletion(s.id);
    return unlocked && completion < 1;
  });

  const progressPercent = Math.round(globalProgress * 100);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Hero card — explains the tool */}
      <div className="relative overflow-hidden bg-white rounded-2xl shadow-elevated border border-border-default animate-slide-up">
        {/* Decorative colored accent at top */}
        <div className="h-1.5 bg-gradient-to-r from-sprint-warmup via-lecko-blue to-sprint-3" />

        {/* Subtle decorative blurs */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-lecko-blue/5 rounded-full blur-3xl -translate-y-12 translate-x-12" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-sprint-warmup/5 rounded-full blur-2xl translate-y-8 -translate-x-8" />

        <div className="relative px-5 py-5 sm:px-7 sm:py-6">
          {/* Top badge + change metier */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-display font-bold uppercase tracking-wider bg-lecko-blue/8 text-lecko-blue">
              <BookOpen size={12} />
              {t('dashboard.subtitle')}
            </span>
            {onChangeMetier && (
              <button
                onClick={onChangeMetier}
                className="text-[12px] font-body text-text-muted hover:text-text-body transition-colors"
              >
                {t('dashboard.changeMetier')}
              </button>
            )}
          </div>

          <h1 className="font-display font-extrabold text-[22px] sm:text-[26px] text-text-on-light tracking-tight leading-tight mb-2">
            {t('dashboard.title')}
          </h1>

          <p className="text-[14px] sm:text-[15px] text-text-muted font-body leading-relaxed mb-5 max-w-lg">
            {t('dashboard.description')}
          </p>

          {/* 3 key points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-5">
            {[
              { icon: Flame, text: t('dashboard.heroPoint1'), color: '#06B6D4' },
              { icon: FolderOpen, text: t('dashboard.heroPoint2'), color: '#2563EB' },
              { icon: Lightbulb, text: t('dashboard.heroPoint3'), color: '#F59E0B' },
            ].map((point) => (
              <div key={point.text} className="flex items-start gap-2.5 bg-surface-elevated/70 rounded-xl px-3 py-2.5 border border-border-subtle">
                <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${point.color}12` }}>
                  <point.icon size={15} style={{ color: point.color }} />
                </div>
                <span className="text-[12px] sm:text-[13px] text-text-body font-body leading-snug">{point.text}</span>
              </div>
            ))}
          </div>

          {/* Progress + CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-border-subtle">
            {/* Progress bar */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[12px] font-body text-text-muted">{t('dashboard.yourProgress')}</span>
                <span className="text-[13px] font-display font-bold text-text-on-light">{progressPercent}%</span>
              </div>
              <div className="h-2 rounded-full bg-surface-elevated overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sprint-warmup via-lecko-blue to-sprint-3 transition-all duration-slow animate-progress-fill"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* CTA button */}
            {nextSprint && (
              <button
                onClick={() => navigate(nextSprint.path)}
                className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-lecko-blue text-white font-display font-bold text-[14px] hover:bg-lecko-blue/90 active:scale-[0.97] transition-all duration-fast shadow-elevated"
              >
                {progressPercent > 0 ? t('dashboard.continue') : t('dashboard.letsGo')}
                <ChevronRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sprint cards */}
      <div className="space-y-3">
        {sprints.map((sprint, idx) => {
          const completion = getSprintCompletion(sprint.id);
          const started = isSprintStarted(sprint.id);
          const isComplete = completion === 1;
          const unlocked = isSprintUnlocked(sprint.id);
          const isJustUnlocked = sprint.id === justUnlocked;

          return (
            <button
              key={sprint.id}
              onClick={() => (unlocked || isJustUnlocked) && navigate(sprint.path)}
              disabled={!unlocked && !isJustUnlocked}
              className={`animate-slide-up w-full bg-white rounded-xl border p-4 flex items-center gap-4 transition-all duration-base text-left group ${
                unlocked || isJustUnlocked
                  ? 'shadow-card hover:shadow-elevated hover:border-border-strong active:scale-[0.995] cursor-pointer border-border-default'
                  : 'opacity-45 cursor-not-allowed border-border-subtle'
              }`}
              style={{
                animationDelay: `${idx * 60}ms`,
              }}
            >
              {/* Icon */}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 relative transition-transform duration-base group-hover:scale-105 ${isJustUnlocked ? 'animate-unlock-glow' : ''}`}
                style={{
                  backgroundColor: unlocked || isJustUnlocked ? `${sprint.color}12` : '#F1F5F9',
                  '--unlock-color': `${sprint.color}60`,
                } as React.CSSProperties}
              >
                {isJustUnlocked ? (
                  <>
                    <LockOpen size={20} className="absolute animate-unlock-shake" style={{ color: sprint.color }} />
                    <sprint.icon size={20} className="absolute animate-unlock-appear" style={{ color: sprint.color }} />
                  </>
                ) : unlocked ? (
                  <sprint.icon size={20} style={{ color: sprint.color }} />
                ) : (
                  <Lock size={18} className="text-text-muted/50" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className={`font-display font-bold text-[15px] tracking-tight ${unlocked || isJustUnlocked ? 'text-text-on-light' : 'text-text-muted'}`}>
                    {sprint.title}
                  </h2>
                  {isComplete && <CheckCircle2 size={16} className="text-success shrink-0" />}
                </div>
                {unlocked || isJustUnlocked ? (
                  <p className={`text-[13px] mt-0.5 font-body ${isJustUnlocked ? 'text-text-on-light font-semibold animate-fade-in' : 'text-text-muted'}`}>
                    {isJustUnlocked ? t('dashboard.justUnlocked') : sprint.subtitle}
                  </p>
                ) : (
                  <p className="text-[12px] text-text-muted/70 mt-0.5 font-body italic">
                    {t('dashboard.lockMessage', { requires: sprint.requires })}
                  </p>
                )}
                {started && !isComplete && unlocked && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-border-default rounded-full overflow-hidden max-w-[180px]">
                      <div
                        className="h-full rounded-full transition-all duration-slow"
                        style={{ width: `${completion * 100}%`, backgroundColor: sprint.color }}
                      />
                    </div>
                    <span className="text-[11px] font-bold tabular-nums" style={{ color: sprint.color }}>
                      {Math.round(completion * 100)}%
                    </span>
                  </div>
                )}
              </div>

              {/* Duration + arrow */}
              <div className="shrink-0 flex flex-col items-end gap-1.5">
                <span className="text-[11px] font-semibold text-text-muted font-body px-2 py-0.5 bg-surface-elevated rounded-md">{sprint.duration}</span>
                {unlocked ? (
                  <ChevronRight
                    size={18}
                    className="text-border-strong group-hover:text-text-body group-hover:translate-x-0.5 transition-all"
                  />
                ) : (
                  <Lock size={14} className="text-text-muted/30" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Reset — bottom, discreet */}
      <div className="pt-2 pb-2 flex justify-center">
        <button
          onClick={() => {
            if (window.confirm(t('dashboard.resetConfirm'))) {
              localStorage.removeItem('canal-tp-submissions');
              window.location.reload();
            }
          }}
          className="flex items-center gap-1.5 px-3 py-2 rounded-md text-[12px] font-body text-text-muted hover:text-red-500 hover:bg-red-50 transition-all duration-fast"
        >
          <RotateCcw size={13} />
          {t('dashboard.resetButton')}
        </button>
      </div>
    </div>
  );
}
