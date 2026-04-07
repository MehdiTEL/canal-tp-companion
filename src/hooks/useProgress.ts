import { useState, useEffect, useCallback, useRef, useSyncExternalStore } from 'react';
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
    'sprint-1': { total: 5, completed: 0 },
    'sprint-2': { total: 5, completed: 0 },
    'sprint-3': { total: 6, completed: 0 },
  };

  Object.values(submissions).forEach((sub) => {
    if (sub.completed && sprints[sub.sprint]) {
      sprints[sub.sprint].completed++;
    }
  });

  return sprints;
}

// Shared external store — all useProgress consumers share ONE subscription
let listeners: Array<() => void> = [];
let cachedSnapshot = getLocalSubmissions();

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function getSnapshot() {
  return cachedSnapshot;
}

function notifyListeners() {
  cachedSnapshot = getLocalSubmissions();
  listeners.forEach((l) => l());
}

// Listen for cross-tab storage events
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key === SUBMISSIONS_KEY) notifyListeners();
  });
}

// Custom event dispatched by useSubmission when saving locally
export function notifyProgressUpdate() {
  notifyListeners();
}

const UNLOCK_CHAIN: Record<string, string> = {
  echauffement: 'sprint-1',
  'sprint-1': 'sprint-2',
  'sprint-2': 'sprint-3',
};

export function useProgress() {
  const submissions = useSyncExternalStore(subscribe, getSnapshot);
  const [sprintProgress, setSprintProgress] = useState(() => computeProgress(submissions));
  const [justUnlocked, setJustUnlocked] = useState<string | null>(null);

  // Track previously unlocked sprints to detect new unlocks
  const prevUnlockedRef = useRef<Set<string>>(new Set());

  // Recompute progress when submissions change
  useEffect(() => {
    setSprintProgress(computeProgress(submissions));
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

  const getSprintCompletion = useCallback((sprintId: string) => {
    const sprint = sprintProgress[sprintId];
    if (!sprint) return 0;
    return sprint.total > 0 ? sprint.completed / sprint.total : 0;
  }, [sprintProgress]);

  const isSprintStarted = useCallback((sprintId: string) => {
    return Object.values(submissions).some(
      (sub) => sub.sprint === sprintId && sub.completed
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

  // Detect when a new sprint gets unlocked
  useEffect(() => {
    const currentUnlocked = new Set<string>();
    for (const sprintId of ['echauffement', 'sprint-1', 'sprint-2', 'sprint-3']) {
      if (isSprintUnlocked(sprintId)) currentUnlocked.add(sprintId);
    }

    // Find newly unlocked sprint (was locked, now unlocked)
    for (const id of currentUnlocked) {
      if (!prevUnlockedRef.current.has(id) && id !== 'echauffement') {
        // Also check if the previous sprint in the chain just completed
        const prevSprint = Object.entries(UNLOCK_CHAIN).find(([, next]) => next === id)?.[0];
        if (prevSprint && isSprintCompleted(prevSprint)) {
          setJustUnlocked(id);
          setTimeout(() => setJustUnlocked(null), 5000);
        }
      }
    }

    prevUnlockedRef.current = currentUnlocked;
  }, [isSprintUnlocked, isSprintCompleted]);

  return {
    sprintProgress,
    globalProgress,
    totalCompleted,
    totalExercises,
    getSprintCompletion,
    isSprintStarted,
    isSprintCompleted,
    isSprintUnlocked,
    justUnlocked,
  };
}
