import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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

  const progress = currentStep !== undefined && totalSteps !== undefined && totalSteps > 0
    ? Math.round((currentStep / totalSteps) * 100)
    : 0;

  return (
    <div className="space-y-3">
      {/* Back to dashboard */}
      <button
        onClick={onBack || (() => navigate('/dashboard'))}
        className="flex items-center gap-1.5 text-[13px] font-body text-text-muted hover:text-text-on-light transition-colors"
      >
        <ArrowLeft size={15} />
        {onBack ? (backLabel || 'Retour') : 'Retour au tableau de bord'}
      </button>

      <div
        className="rounded-xl px-5 py-4"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-display font-bold text-white tracking-[-0.02em]">
              {title}
            </h1>
            {currentStep !== undefined && totalSteps !== undefined && (
              <p className="text-[13px] text-white/70 font-body mt-0.5">
                Etape {currentStep} sur {totalSteps}
              </p>
            )}
          </div>

          <div className="bg-white/15 backdrop-blur-sm rounded-lg px-3 py-2 [&_*]:!text-white [&_.text-text-on-light]:!text-white [&_.text-text-muted]:!text-white/60">
            <Timer durationMinutes={duration} color="white" />
          </div>
        </div>

        {/* Progress bar */}
        {currentStep !== undefined && totalSteps !== undefined && totalSteps > 0 && (
          <div className="mt-3 flex items-center gap-3">
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
