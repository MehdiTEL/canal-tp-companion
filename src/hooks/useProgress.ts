import { useMemo } from 'react';
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

export function useProgress() {
  const submissions = getLocalSubmissions();

  const sprintProgress = useMemo(() => {
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
  }, [submissions]);

  const totalCompleted = Object.values(sprintProgress).reduce(
    (sum, s) => sum + s.completed,
    0
  );
  const totalExercises = Object.values(sprintProgress).reduce(
    (sum, s) => sum + s.total,
    0
  );
  const globalProgress = totalExercises > 0 ? totalCompleted / totalExercises : 0;

  const getSprintCompletion = (sprintId: string) => {
    const sprint = sprintProgress[sprintId];
    if (!sprint) return 0;
    return sprint.total > 0 ? sprint.completed / sprint.total : 0;
  };

  const isSprintStarted = (sprintId: string) => {
    return Object.values(submissions).some(
      (sub) => sub.sprint === sprintId && (sub.prompt_text || sub.completed)
    );
  };

  const isSprintCompleted = (sprintId: string) => {
    return getSprintCompletion(sprintId) === 1;
  };

  // Sequential unlocking: echauffement always open, each sprint requires previous completed
  const isSprintUnlocked = (sprintId: string) => {
    if (sprintId === 'echauffement') return true;
    if (sprintId === 'sprint-1') return isSprintCompleted('echauffement');
    if (sprintId === 'sprint-2') return isSprintCompleted('sprint-1');
    if (sprintId === 'sprint-3') return isSprintCompleted('sprint-2');
    return true;
  };

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
