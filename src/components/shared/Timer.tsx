import { Clock, Play, Pause, RotateCcw } from 'lucide-react';
import { useTimer } from '../../hooks/useTimer';

interface TimerProps {
  durationMinutes: number;
  color?: string;
}

export function Timer({ durationMinutes, color }: TimerProps) {
  const { minutes, seconds, isRunning, hasStarted, isWarning, isExpired, progress, start, pause, reset } =
    useTimer(durationMinutes);

  const displayTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="flex items-center gap-3">
      <Clock size={16} className={isExpired ? 'text-red-400' : isWarning ? 'text-warning' : 'text-text-muted'} />

      <span
        className={`font-mono text-lg font-bold tabular-nums tracking-tight ${
          isExpired
            ? 'text-red-500 animate-shake'
            : isWarning
              ? 'text-warning animate-pulse-soft'
              : 'text-text-on-light'
        }`}
      >
        {displayTime}
      </span>

      {/* Progress bar */}
      <div className="w-16 h-1.5 bg-border-default rounded-full overflow-hidden hidden sm:block">
        <div
          className={`h-full rounded-full transition-all duration-[1000ms] ${
            isExpired ? 'bg-red-500' : isWarning ? 'bg-warning animate-pulse-soft' : ''
          }`}
          style={{
            width: `${progress * 100}%`,
            backgroundColor: isExpired ? undefined : isWarning ? undefined : (color || '#2563EB'),
          }}
        />
      </div>

      <div className="flex gap-0.5">
        {!isRunning && !isExpired && (
          <button
            onClick={start}
            className="p-1.5 rounded-md hover:bg-black/5 transition-colors"
            aria-label="Demarrer le chronometre"
          >
            <Play size={14} />
          </button>
        )}
        {isRunning && (
          <button
            onClick={pause}
            className="p-1.5 rounded-md hover:bg-black/5 transition-colors"
            aria-label="Mettre en pause"
          >
            <Pause size={14} />
          </button>
        )}
        {hasStarted && (
          <button
            onClick={reset}
            className="p-1.5 rounded-md hover:bg-black/5 transition-colors"
            aria-label="Reinitialiser"
          >
            <RotateCcw size={14} />
          </button>
        )}
      </div>
    </div>
  );
}
