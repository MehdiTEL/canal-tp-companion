import { ArrowLeft } from 'lucide-react';
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
  return (
    <div
      className="rounded-xl px-5 py-4 mb-6"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="p-1.5 rounded-md hover:bg-white/15 text-white/80 hover:text-white transition-colors"
              aria-label={backLabel || 'Retour'}
            >
              <ArrowLeft size={18} />
            </button>
          )}
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
        </div>

        <div className="bg-white/15 backdrop-blur-sm rounded-lg px-3 py-2 [&_*]:!text-white [&_.text-text-on-light]:!text-white [&_.text-text-muted]:!text-white/60">
          <Timer durationMinutes={duration} color="white" />
        </div>
      </div>

      {/* Progress within sprint */}
      {currentStep !== undefined && totalSteps !== undefined && totalSteps > 0 && (
        <div className="mt-3 h-1 rounded-full bg-white/20 overflow-hidden">
          <div
            className="h-full rounded-full bg-white/60 transition-all duration-slow"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
}
