import { useState, useEffect, useCallback } from 'react';
import type { LocalSubmission } from '../types';

const SUBMISSIONS_KEY = 'canal-tp-submissions';

function getLocalSubmissions(): Record<string, LocalSubmission> {
  try {
    const stored = localStorage.getItem(SUBMISSIONS_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function computeProgress(submissions: Record<string, LocalSubmission>) {
  const sprints: Record<string, { total: number; completed: number }> = {
    echauffement: { total: 1, completed: 0 },
    'sprint-1': { total: 6, completed: 0 },
    'sprint-2': { total: 3, completed: 0 },
    'sprint-3': { total: 3, completed: 0 },
  };

  Object.values(submissions).forEach((sub) => {
    if (sub.completed && sprints[sub.sprint]) {
      sprints[sub.sprint].completed++;
    }
  });

  return sprints;
}

export function useProgress() {
  const [submissions, setSubmissions] = useState(getLocalSubmissions);
  const [sprintProgress, setSprintProgress] = useState(() => computeProgress(getLocalSubmissions()));

  // Refresh from localStorage periodically (2s) and on cross-tab storage events
  useEffect(() => {
    const refresh = () => {
      const subs = getLocalSubmissions();
      setSubmissions(subs);
      setSprintProgress(computeProgress(subs));
    };

    const interval = setInterval(refresh, 2000);

    const onStorage = (e: StorageEvent) => {
      if (e.key === SUBMISSIONS_KEY) refresh();
    };
    window.addEventListener('storage', onStorage);

    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  const totalCompleted = Object.values(sprintProgress).reduce(
    (sum, s) => sum + s.completed,
    0
  );
  const totalExercises = Object.values(sprintProgress).reduce(
    (sum, s) => sum + s.total,
    0
  );
  const globalProgress = totalExercises > 0 ? totalCompleted / totalExercises : 0;

  const getSprintCompletion = useCallback((sprintId: string) => {
    const sprint = sprintProgress[sprintId];
    if (!sprint) return 0;
    return sprint.total > 0 ? sprint.completed / sprint.total : 0;
  }, [sprintProgress]);

  const isSprintStarted = useCallback((sprintId: string) => {
    return Object.values(submissions).some(
      (sub) => sub.sprint === sprintId && (sub.prompt_text || sub.completed)
    );
  }, [submissions]);

  const isSprintCompleted = useCallback((sprintId: string) => {
    const sprint = sprintProgress[sprintId];
    if (!sprint) return false;
    return sprint.total > 0 && sprint.completed >= sprint.total;
  }, [sprintProgress]);

  // Sequential unlocking: echauffement always open, each sprint requires previous completed
  const isSprintUnlocked = useCallback((sprintId: string) => {
    if (sprintId === 'echauffement') return true;
    if (sprintId === 'sprint-1') return isSprintCompleted('echauffement');
    if (sprintId === 'sprint-2') return isSprintCompleted('sprint-1');
    if (sprintId === 'sprint-3') return isSprintCompleted('sprint-2');
    return true;
  }, [isSprintCompleted]);

  return {
    sprintProgress,
    globalProgress,
    totalCompleted,
    totalExercises,
    getSprintCompletion,
    isSprintStarted,
    isSprintCompleted,
    isSprintUnlocked,
  };
}
