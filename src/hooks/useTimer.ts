import { useState, useEffect, useCallback, useRef } from 'react';

export function useTimer(durationMinutes: number) {
  const [totalSeconds, setTotalSeconds] = useState(durationMinutes * 60);
  const [isRunning, setIsRunning] = useState(true);
  const [hasStarted, setHasStarted] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const isWarning = totalSeconds <= 300 && totalSeconds > 0; // 5 min
  const isExpired = totalSeconds <= 0;
  const progress = 1 - totalSeconds / (durationMinutes * 60);

  useEffect(() => {
    if (isRunning && totalSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setTotalSeconds((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, totalSeconds]);

  const start = useCallback(() => {
    setIsRunning(true);
    setHasStarted(true);
  }, []);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setIsRunning(false);
    setHasStarted(false);
    setTotalSeconds(durationMinutes * 60);
  }, [durationMinutes]);

  return {
    minutes,
    seconds,
    isRunning,
    hasStarted,
    isWarning,
    isExpired,
    progress,
    start,
    pause,
    reset,
  };
}
