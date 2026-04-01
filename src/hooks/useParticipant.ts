import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase';
import type { Participant } from '../types';

const STORAGE_KEY = 'canal-tp-participant';

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
          id: crypto.randomUUID(),
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
      // Fallback local
      const p: Participant = {
        id: crypto.randomUUID(),
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
