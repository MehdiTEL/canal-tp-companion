import { Check } from 'lucide-react';

interface StepperProps {
  steps: { id: string; label: string }[];
  currentIndex: number;
  completedIndexes: Set<number>;
  color: string;
  onStepClick?: (index: number) => void;
}

export function Stepper({ steps, currentIndex, completedIndexes, color, onStepClick }: StepperProps) {
  return (
    <div className="flex items-center w-full">
      {steps.map((step, i) => {
        const isCompleted = completedIndexes.has(i);
        const isCurrent = i === currentIndex;
        const isPast = i < currentIndex || isCompleted;
        const isClickable = isPast || isCurrent;

        return (
          <div key={step.id} className="flex items-center flex-1 last:flex-none">
            {/* Step circle + label */}
            <button
              onClick={() => isClickable && onStepClick?.(i)}
              disabled={!isClickable}
              className={`flex flex-col items-center gap-1 shrink-0 transition-all duration-base ${
                isClickable ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-display font-bold transition-all duration-slow ${
                  isCompleted
                    ? 'text-white'
                    : isCurrent
                      ? 'text-white ring-4 ring-opacity-20'
                      : 'bg-border-default text-text-muted'
                }`}
                style={{
                  backgroundColor: isCompleted || isCurrent ? color : undefined,
                  boxShadow: isCurrent ? `0 0 0 4px ${color}20` : undefined,
                }}
              >
                {isCompleted ? <Check size={14} strokeWidth={3} /> : i + 1}
              </div>
              <span
                className={`text-[11px] font-body whitespace-nowrap transition-colors ${
                  isCurrent ? 'font-semibold text-text-on-light' : 'text-text-muted'
                }`}
              >
                {step.label}
              </span>
            </button>

            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="flex-1 h-[2px] mx-2 mt-[-18px] rounded-full bg-border-default overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-slow"
                  style={{
                    width: isPast ? '100%' : '0%',
                    backgroundColor: color,
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
