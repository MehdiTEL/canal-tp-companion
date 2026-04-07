import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Download, Eye, ArrowLeft, RefreshCw } from 'lucide-react';
import { supabase } from '../supabase';
import type { Participant, Submission } from '../types';

const FORMATEUR_CODE = import.meta.env.VITE_FORMATEUR_CODE || 'lecko2026';

export function Formateur() {
  const { t } = useTranslation();
  const [code, setCode] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedParticipant, setSelectedParticipant] = useState<string | null>(null);
  const [filterSprint, setFilterSprint] = useState('');
  const [filterMetier, setFilterMetier] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === FORMATEUR_CODE) {
      setAuthenticated(true);
    }
  };

  const fetchData = async () => {
    if (!supabase) return;
    setLoading(true);
    try {
      const [pRes, sRes] = await Promise.all([
        supabase.from('participants').select('*').order('created_at', { ascending: false }),
        supabase.from('submissions').select('*').order('created_at', { ascending: false }),
      ]);
      if (pRes.data) setParticipants(pRes.data);
      if (sRes.data) setSubmissions(sRes.data);
    } catch (err) {
      console.error('Erreur chargement:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authenticated && supabase) fetchData();
  }, [authenticated]);

  const metiers = [...new Set(participants.map((p) => p.metier))];

  const filteredParticipants = participants.filter((p) => {
    if (filterMetier && p.metier !== filterMetier) return false;
    return true;
  });

  const getParticipantSubmissions = (pid: string) => {
    let subs = submissions.filter((s) => s.participant_id === pid);
    if (filterSprint) subs = subs.filter((s) => s.sprint === filterSprint);
    return subs;
  };

  const getParticipantStats = (pid: string) => {
    const subs = getParticipantSubmissions(pid);
    const completed = subs.filter((s) => s.completed).length;
    const totalHints = subs.reduce((sum, s) => sum + s.hints_used, 0);
    const sprints = new Set(subs.filter((s) => s.completed).map((s) => s.sprint));
    return { completed, totalHints, sprints: sprints.size };
  };

  const exportCSV = () => {
    const headers = ['Metier', 'Sprint', 'Exercice', 'Prompt', 'Resultat', 'Auto-evaluation', 'Astuces consultees', 'Termine', 'Date'];
    const rows = submissions.map((s) => {
      const p = participants.find((p) => p.id === s.participant_id);
      return [
        p?.metier || '', s.sprint, s.exercice_id,
        `"${(s.prompt_text || '').replace(/"/g, '""')}"`,
        `"${(s.result_text || '').replace(/"/g, '""')}"`,
        s.self_rating?.toString() || '', s.hints_used.toString(),
        s.completed ? 'Oui' : 'Non',
        new Date(s.created_at).toLocaleString('fr-FR'),
      ];
    });
    const csv = [headers.join(';'), ...rows.map((r) => r.join(';'))].join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tp-canal-resultats-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Auth screen
  if (!authenticated) {
    return (
      <div className="max-w-sm mx-auto mt-20 animate-slide-up">
        <div className="bg-surface-card rounded-xl shadow-elevated p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Shield size={18} className="text-lecko-blue" />
            <h2 className="font-display font-bold text-text-on-light">{t('formateur.title')}</h2>
          </div>
          <form onSubmit={handleAuth} className="space-y-3">
            <input type="password" value={code} onChange={(e) => setCode(e.target.value)}
              placeholder={t('formateur.codePlaceholder')} aria-label={t('formateur.codePlaceholder')}
              className="w-full rounded-md border border-border-default px-3 py-2.5 text-[14px] focus:outline-none focus:ring-2 focus:ring-lecko-blue/25 focus:border-lecko-blue transition-all" />
            <button type="submit"
              className="w-full px-4 py-2.5 rounded-md bg-surface-dark text-white font-display font-bold text-[14px] hover:bg-surface-dark/90 transition-colors active:scale-[0.98]">
              {t('formateur.submit')}
            </button>
          </form>
          {code && code !== FORMATEUR_CODE && code.length >= 4 && (
            <p className="text-[13px] text-red-500 font-body">{t('formateur.wrongCode')}</p>
          )}
        </div>
      </div>
    );
  }

  if (!supabase) {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-xl font-display font-bold text-text-on-light">{t('formateur.title')}</h1>
        <div className="bg-warning-bg border border-warning/20 rounded-lg p-4 text-[14px] text-text-body font-body">
          {t('formateur.noSupabase')}
        </div>
      </div>
    );
  }

  // Detail view
  if (selectedParticipant) {
    const p = participants.find((p) => p.id === selectedParticipant);
    const subs = getParticipantSubmissions(selectedParticipant);
    return (
      <div className="max-w-3xl mx-auto space-y-5">
        <button onClick={() => setSelectedParticipant(null)}
          className="flex items-center gap-1.5 text-[13px] text-text-muted hover:text-text-body transition-colors font-body">
          <ArrowLeft size={15} /> {t('formateur.back')}
        </button>
        <h1 className="text-xl font-display font-bold text-text-on-light">
          {p?.metier}
        </h1>
        {subs.length === 0 ? (
          <p className="text-[14px] text-text-muted font-body">{t('formateur.noSubmissions')}</p>
        ) : (
          <div className="space-y-3">
            {subs.map((s) => (
              <div key={s.id} className="bg-surface-card rounded-lg shadow-card p-4 space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-display font-bold text-lecko-blue uppercase">{s.sprint}</span>
                    <span className="text-[11px] text-text-muted font-body">{s.exercice_id}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-text-muted font-body">
                    {s.self_rating && <span>{t('rating.label')} {s.self_rating}/5</span>}
                    {s.hints_used > 0 && <span>{t('formateur.colHints')} : {s.hints_used}</span>}
                    {s.completed && <span className="text-success font-semibold">{t('exercise.completed')}</span>}
                  </div>
                </div>
                {s.prompt_text && (
                  <div>
                    <p className="text-[11px] font-semibold text-text-muted mb-1">{t('formateur.prompt')}</p>
                    <p className="text-[13px] text-text-body whitespace-pre-wrap bg-surface-elevated rounded-md p-3 font-body">{s.prompt_text}</p>
                  </div>
                )}
                {s.result_text && (
                  <div>
                    <p className="text-[11px] font-semibold text-text-muted mb-1">{t('formateur.result')}</p>
                    <p className="text-[13px] text-text-body whitespace-pre-wrap bg-surface-elevated rounded-md p-3 font-body">{s.result_text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Main list
  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-xl font-display font-bold text-text-on-light">{t('formateur.title')}</h1>
          <p className="text-[13px] text-text-muted font-body mt-0.5">
            {t('formateur.participants', { count: participants.length })} / {t('formateur.submissions', { count: submissions.length })}
          </p>
        </div>
        <div className="flex gap-2">
          <button onClick={fetchData} disabled={loading}
            className="flex items-center gap-1.5 px-3 py-2 rounded-md border border-border-default text-[13px] text-text-body hover:bg-surface-elevated transition-colors font-body active:scale-[0.98]">
            <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
            {loading ? t('formateur.loading') : t('formateur.refresh')}
          </button>
          <button onClick={exportCSV} disabled={submissions.length === 0}
            className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-surface-dark text-white text-[13px] font-display font-bold hover:bg-surface-dark/90 disabled:opacity-40 transition-colors active:scale-[0.98]">
            <Download size={13} /> {t('formateur.exportCsv')}
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 flex-wrap">
        <select value={filterSprint} onChange={(e) => setFilterSprint(e.target.value)}
          className="rounded-md border border-border-default px-3 py-1.5 text-[13px] font-body bg-white focus:outline-none focus:ring-2 focus:ring-lecko-blue/25">
          <option value="">{t('formateur.allSprints')}</option>
          <option value="echauffement">{t('nav.echauffement')}</option>
          <option value="sprint-1">{t('nav.sprint1')}</option>
          <option value="sprint-2">{t('nav.sprint2')}</option>
          <option value="sprint-3">{t('nav.sprint3')}</option>
        </select>
        <select value={filterMetier} onChange={(e) => setFilterMetier(e.target.value)}
          className="rounded-md border border-border-default px-3 py-1.5 text-[13px] font-body bg-white focus:outline-none focus:ring-2 focus:ring-lecko-blue/25">
          <option value="">{t('formateur.allMetiers')}</option>
          {metiers.map((m) => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="bg-surface-card rounded-xl shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[13px] font-body">
            <thead>
              <tr className="bg-surface-elevated border-b border-border-subtle">
                <th className="text-left px-4 py-2.5 font-semibold text-text-body">{t('formateur.colMetier')}</th>
                <th className="text-center px-4 py-2.5 font-semibold text-text-body">{t('formateur.colSprints')}</th>
                <th className="text-center px-4 py-2.5 font-semibold text-text-body">{t('formateur.colExercises')}</th>
                <th className="text-center px-4 py-2.5 font-semibold text-text-body">{t('formateur.colHints')}</th>
                <th className="text-center px-4 py-2.5 font-semibold text-text-body">{t('formateur.colActions')}</th>
              </tr>
            </thead>
            <tbody>
              {filteredParticipants.map((p) => {
                const stats = getParticipantStats(p.id);
                return (
                  <tr key={p.id} className="border-b border-border-subtle last:border-0 hover:bg-surface-elevated/50 transition-colors">
                    <td className="px-4 py-2.5 font-semibold text-text-on-light">{p.metier}</td>
                    <td className="px-4 py-2.5 text-center">{stats.sprints}/4</td>
                    <td className="px-4 py-2.5 text-center">{stats.completed}</td>
                    <td className="px-4 py-2.5 text-center">{stats.totalHints}</td>
                    <td className="px-4 py-2.5 text-center">
                      <button onClick={() => setSelectedParticipant(p.id)}
                        className="inline-flex items-center gap-1 text-lecko-blue hover:underline text-[12px]">
                        <Eye size={12} /> {t('formateur.view')}
                      </button>
                    </td>
                  </tr>
                );
              })}
              {filteredParticipants.length === 0 && (
                <tr><td colSpan={5} className="px-4 py-8 text-center text-text-muted">{t('formateur.noParticipants')}</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
