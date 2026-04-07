import { useCallback } from 'react';
import { supabase } from '../supabase';
import { showToast } from '../components/shared/showToast';
import { notifyProgressUpdate } from './useProgress';
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

function saveLocalSubmission(exercice_id: string, data: LocalSubmission) {
  const all = getLocalSubmissions();
  all[exercice_id] = data;
  localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(all));
}

export function useSubmission(participantId: string | undefined) {
  const saveSubmission = useCallback(
    async (data: {
      sprint: string;
      exercice_id: string;
      prompt_text: string;
      result_text: string;
      self_rating: number | null;
      hints_used: number;
      completed: boolean;
    }) => {
      // Toujours sauvegarder en local
      saveLocalSubmission(data.exercice_id, { ...data });
      notifyProgressUpdate();

      if (!participantId || !supabase) return;

      try {
        const { error } = await supabase
          .from('submissions')
          .upsert(
            {
              participant_id: participantId,
              ...data,
              updated_at: new Date().toISOString(),
            },
            { onConflict: 'participant_id,exercice_id' }
          );

        if (error) {
          console.error('Erreur sauvegarde Supabase:', error);
          showToast('Erreur de synchronisation — sauvegarde locale OK', 'warning');
        }
      } catch (err) {
        console.error('Erreur sauvegarde:', err);
        showToast('Connexion perdue — sauvegarde locale OK', 'error');
      }
    },
    [participantId]
  );

  const getLocalData = useCallback((exercice_id: string): LocalSubmission | null => {
    const all = getLocalSubmissions();
    return all[exercice_id] || null;
  }, []);

  const getAllLocalSubmissions = useCallback(() => {
    return getLocalSubmissions();
  }, []);

  return { saveSubmission, getLocalData, getAllLocalSubmissions };
}
