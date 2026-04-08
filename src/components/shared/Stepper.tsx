import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Lock } from 'lucide-react';

interface StepperProps {
  steps: { id: string; label: string }[];
  currentIndex: number;
  completedIndexes: Set<number>;
  color: string;
  onStepClick?: (index: number) => void;
}

export function Stepper({ steps, currentIndex, completedIndexes, color, onStepClick }: StepperProps) {
  const { t } = useTranslation();
  const [shakenIndex, setShakenIndex] = useState<number | null>(null);

  const handleClick = (i: number, isClickable: boolean) => {
    if (isClickable) {
      onStepClick?.(i);
    } else {
      setShakenIndex(i);
      setTimeout(() => setShakenIndex(null), 500);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-border-default shadow-card overflow-hidden">
      {steps.map((step, i) => {
        const isCompleted = completedIndexes.has(i);
        const isCurrent = i === currentIndex;
        const isClickable = isCompleted || isCurrent;

        return (
          <button
            key={step.id}
            onClick={() => handleClick(i, isClickable)}
            aria-disabled={!isClickable}
            aria-current={isCurrent ? 'step' : undefined}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-fast border-l-3 ${
              isCurrent
                ? 'bg-surface-elevated/80'
                : isCompleted
                  ? 'hover:bg-surface-elevated/50'
                  : 'opacity-60'
            } ${i > 0 ? 'border-t border-border-subtle' : ''} ${
              isClickable ? 'cursor-pointer' : 'cursor-default'
            } ${shakenIndex === i ? 'animate-shake' : ''}`}
            style={{
              borderLeftColor: isCurrent ? color : isCompleted ? `${color}60` : 'transparent',
              borderLeftWidth: '3px',
            }}
          >
            {/* Step indicator */}
            <div
              className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-display font-bold transition-all duration-base ${
                isCompleted
                  ? 'text-white'
                  : isCurrent
                    ? 'text-white shadow-sm'
                    : 'bg-border-default text-text-muted'
              }`}
              style={{
                backgroundColor: isCompleted || isCurrent ? color : undefined,
              }}
            >
              {isCompleted ? <Check size={13} strokeWidth={3} /> : isCurrent ? i + 1 : <Lock size={11} />}
            </div>

            {/* Label */}
            <span
              className={`text-[13px] font-body flex-1 ${
                isCurrent
                  ? 'font-semibold text-text-on-light'
                  : isCompleted
                    ? 'text-text-body'
                    : 'text-text-muted'
              }`}
            >
              {step.label}
            </span>

            {/* Status indicator */}
            {isCompleted && (
              <span className="text-[11px] font-body text-success font-medium">✓</span>
            )}
            {isCurrent && (
              <span
                className="text-[10px] font-display font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
                style={{ backgroundColor: color }}
              >
                {t('stepper.current')}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
