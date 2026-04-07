import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Timer } from './Timer';

interface SprintHeaderProps {
  title: string;
  color: string;
  duration: number;
  currentStep?: number;
  totalSteps?: number;
  onBack?: () => void;
  backLabel?: string;
}

export function SprintHeader({
  title,
  color,
  duration,
  currentStep,
  totalSteps,
  onBack,
  backLabel,
}: SprintHeaderProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-12 translate-x-12" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-black/5 rounded-full translate-y-8 -translate-x-8" />

        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-[-0.02em]">
              {title}
            </h1>
            {currentStep !== undefined && totalSteps !== undefined && (
              <p className="text-[13px] text-white/70 font-body mt-0.5">
                {t('sprintHeader.stepOf', { current: currentStep, total: totalSteps })}
              </p>
            )}
          </div>

          <div className="bg-white/15 backdrop-blur-sm rounded-xl px-3.5 py-2.5 [&_*]:!text-white [&_.text-text-on-light]:!text-white [&_.text-text-muted]:!text-white/60">
            <Timer durationMinutes={duration} color="white" />
          </div>
        </div>

        {currentStep !== undefined && totalSteps !== undefined && totalSteps > 0 && (
          <div className="relative mt-4 flex items-center gap-3">
            <div className="flex-1 h-2 rounded-full bg-white/20 overflow-hidden">
              <div
                className="h-full rounded-full bg-white transition-all duration-slow"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-[12px] font-display font-bold text-white/80 tabular-nums shrink-0">
              {progress}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
