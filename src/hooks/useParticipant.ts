import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase';
import { showToast } from '../components/shared/Toast';
import type { Participant } from '../types';

const STORAGE_KEY = 'canal-tp-participant';

function generateId(): string {
  try {
    return generateId();
  } catch {
    // Fallback for Safari / non-secure contexts
    return 'xxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    }) + '-' + Date.now().toString(36);
  }
}

export function useParticipant() {
  const [participant, setParticipant] = useState<Participant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setParticipant(JSON.parse(stored));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setLoading(false);
  }, []);

  const login = useCallback(async (metier: string, lang: string) => {
    setLoading(true);
    try {
      if (supabase) {
        const { data, error } = await supabase
          .from('participants')
          .insert({ metier, lang, session_id: 'pilote-canal-2026' })
          .select()
          .single();

        if (error) throw error;
        const p = data as Participant;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
        setParticipant(p);
        setLoading(false);
        return p;
      } else {
        // Fallback sans Supabase
        const p: Participant = {
          id: generateId(),
          metier,
          lang,
          session_id: 'pilote-canal-2026',
          created_at: new Date().toISOString(),
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
        setParticipant(p);
        setLoading(false);
        return p;
      }
    } catch (err) {
      console.error('Erreur login:', err);
      showToast('Connexion au serveur impossible — mode local active', 'warning');
      // Fallback local
      const p: Participant = {
        id: generateId(),
        metier,
        lang,
        session_id: 'pilote-canal-2026',
        created_at: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
      setParticipant(p);
      setLoading(false);
      return p;
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setParticipant(null);
  }, []);

  return { participant, loading, login, logout };
}
