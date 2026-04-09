import { useEffect } from 'react';
import { ArrowLeft, Clock, Pause, Play, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTimer } from '../../hooks/useTimer';

interface SprintHeaderProps {
  title: string;
  color: string;
  duration: number;
  currentStep?: number;
  totalSteps?: number;
  subtitle?: string;
  onBack?: () => void;
  backLabel?: string;
  onTimerStateChange?: (expired: boolean) => void;
}

export function SprintHeader({
  title,
  color,
  duration,
  currentStep,
  totalSteps,
  subtitle,
  onBack,
  backLabel,
  onTimerStateChange,
}: SprintHeaderProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { minutes, seconds, isRunning, hasStarted, isWarning, isExpired, start, pause, reset } =
    useTimer(duration, true);

  useEffect(() => {
    onTimerStateChange?.(isExpired);
  }, [isExpired, onTimerStateChange]);

  const displayTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const progress = currentStep !== undefined && totalSteps !== undefined && totalSteps > 0
    ? Math.round((currentStep / totalSteps) * 100)
    : 0;

  return (
    <div className="space-y-3 animate-slide-up">
      <button
        onClick={onBack || (() => navigate('/dashboard'))}
        className="flex items-center gap-1.5 text-[13px] font-body text-text-muted hover:text-text-on-light transition-colors group"
      >
        <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
        {onBack ? (backLabel || t('sprintHeader.backShort')) : t('sprintHeader.back')}
      </button>

      <div
        className="rounded-2xl px-5 py-5 relative overflow-hidden"
        style={{ backgroundColor: color }}
      >
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-12 translate-x-12" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-black/5 rounded-full translate-y-8 -translate-x-8" />

        <div className="relative">
          <div className="flex items-start justify-between gap-3 mb-1">
            <h1 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-[-0.02em]">
              {title}
            </h1>
            <div className={`shrink-0 flex items-center gap-1.5 backdrop-blur-sm rounded-lg px-2.5 py-1.5 transition-colors ${
              isExpired ? 'bg-red-500/30' : isWarning ? 'bg-amber-500/25' : 'bg-white/15'
            }`}>
              <Clock size={13} className={isExpired ? 'text-red-200' : isWarning ? 'text-amber-200' : 'text-white/70'} />
              <span className={`text-[14px] font-mono font-bold tabular-nums ${
                isExpired ? 'text-red-100 animate-pulse-soft' : isWarning ? 'text-amber-100' : 'text-white'
              }`}>
                {displayTime}
              </span>
              <div className="flex gap-0.5 ml-0.5">
                {isRunning ? (
                  <button onClick={pause} className="p-1 rounded hover:bg-white/15 transition-colors" aria-label={t('timer.pause')}>
                    <Pause size={12} className="text-white/80" />
                  </button>
                ) : !isExpired ? (
                  <button onClick={start} className="p-1 rounded hover:bg-white/15 transition-colors" aria-label={t('timer.start')}>
                    <Play size={12} className="text-white/80" />
                  </button>
                ) : null}
                {hasStarted && (
                  <button onClick={reset} className="p-1 rounded hover:bg-white/15 transition-colors" aria-label={t('timer.reset')}>
                    <RotateCcw size={12} className="text-white/80" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {subtitle && (
            <div className="mt-2 mb-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
              <p className="text-[14px] sm:text-[15px] text-white/90 font-body leading-relaxed">
                {subtitle}
              </p>
            </div>
          )}

          {currentStep !== undefined && totalSteps !== undefined && totalSteps > 0 && (
            <div className="flex items-center gap-3 mt-3">
              <div className="flex-1 h-2 rounded-full bg-white/20 overflow-hidden">
                <div
                  className="h-full rounded-full bg-white transition-all duration-slow progress-shimmer"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-[12px] font-display font-bold text-white/80 tabular-nums shrink-0">
                {currentStep}/{totalSteps}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
