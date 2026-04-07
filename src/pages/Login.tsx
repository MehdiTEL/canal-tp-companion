import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Search, Check, Sparkles, BookOpen, Users, Zap } from 'lucide-react';
import i18n from '../i18n';
import { LanguageSelector } from '../components/shared/LanguageSelector';

interface LoginProps {
  onLogin: (metier: string, lang: string) => void;
  loading: boolean;
}

const metiers = [
  'Acquisition',
  'Artistique',
  'Editorial',
  'Exploitation',
  'Fabrication',
  'Operation',
  'Production',
  'Programmation',
  'Redaction',
  'Marketing',
  'Relations clients',
  'Vente',
  'Exploitation IT et medias',
  'Infrastructure et securite',
  'Management IT',
  'Product and project software engineering',
  'Telecom',
  'Achat',
  'Communication',
  'Finance strategique',
  'Juridique',
  'Logistique',
  'Office management',
  'Qualite et projet',
  'RH',
];

export function Login({ onLogin, loading }: LoginProps) {
  const { t } = useTranslation();
  const [selectedMetier, setSelectedMetier] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const normalize = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const filtered = search.trim()
    ? metiers.filter((m) => normalize(m).includes(normalize(search)))
    : metiers;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (m: string) => {
    setSelectedMetier(m);
    setSearch('');
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMetier) {
      onLogin(selectedMetier, i18n.language);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 pt-6 sm:pt-12 bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      {/* Language selector — top right */}
      <div className="absolute top-4 right-4 z-10">
        <LanguageSelector />
      </div>

      <div className="w-full max-w-md animate-slide-up">
        {/* Logo + branding */}
        <div className="text-center mb-6 mt-2">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-[28px] sm:text-[32px] font-display font-extrabold text-lecko-blue tracking-tight leading-none">Lecko.</span>
            <span className="text-border-strong text-lg font-light leading-none">×</span>
            <span className="text-[28px] sm:text-[32px] font-display font-extrabold text-canal-black tracking-[0.08em] leading-none">CANAL+</span>
          </div>
          <p className="text-[11px] text-text-muted font-body uppercase tracking-[0.2em] font-semibold">
            {t('login.session')}
          </p>
        </div>

        {/* Hero card */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-floating text-white mb-5">
          <div className="absolute top-0 right-0 w-40 h-40 bg-lecko-blue/15 rounded-full blur-3xl -translate-y-8 translate-x-8" />
          <div className="absolute bottom-0 left-0 w-28 h-28 bg-sprint-3/10 rounded-full blur-2xl translate-y-6 -translate-x-6" />

          <div className="relative px-5 py-5 sm:px-6">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={16} className="text-amber-400" />
              <span className="text-[11px] font-display font-bold uppercase tracking-wider text-white/60">{t('login.subtitle')}</span>
            </div>
            <h1 className="font-display font-extrabold text-[20px] sm:text-[22px] tracking-tight leading-snug mb-3">
              {t('login.title')}
            </h1>
            <p className="text-[13px] sm:text-[14px] text-white/60 font-body leading-relaxed mb-4">
              {t('login.description')}
            </p>

            {/* 3 highlights */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: BookOpen, label: '4 sprints' },
                { icon: Users, label: '150 participants' },
                { icon: Zap, label: 'Copilot Chat' },
              ].map((item) => (
                <span key={item.label} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/8 text-[11px] font-body font-medium text-white/70">
                  <item.icon size={11} />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Metier selection form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-5 sm:p-6 shadow-elevated border border-border-default/60 space-y-5">
          <div>
            <p className="text-[14px] font-display font-bold text-text-on-light mb-1">
              {t('login.metierLabel')}
            </p>
            <p className="text-[13px] text-text-muted font-body mb-3">
              {t('login.metierHelper')}
            </p>

            <div ref={dropdownRef} className="relative">
              <div
                className={`flex items-center gap-2 border rounded-xl px-3.5 py-3 bg-white transition-all duration-fast cursor-text ${
                  isOpen
                    ? 'border-lecko-blue ring-2 ring-lecko-blue/15 shadow-glow'
                    : 'border-border-default hover:border-border-strong'
                }`}
                onClick={() => { setIsOpen(true); inputRef.current?.focus(); }}
              >
                <Search size={16} className="text-text-muted shrink-0" />
                {selectedMetier && !isOpen ? (
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-[14px] font-body font-semibold text-text-on-light">{selectedMetier}</span>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setSelectedMetier(null); setIsOpen(true); inputRef.current?.focus(); }}
                      className="text-[11px] text-text-muted hover:text-text-body ml-auto transition-colors"
                    >
                      {t('login.change')}
                    </button>
                  </div>
                ) : (
                  <input
                    ref={inputRef}
                    type="text"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value); setIsOpen(true); }}
                    onFocus={() => setIsOpen(true)}
                    placeholder={t('login.metierPlaceholder')}
                    className="flex-1 text-[14px] font-body text-text-on-light placeholder:text-text-muted/60 bg-transparent outline-none"
                  />
                )}
              </div>

              {isOpen && (
                <div className="absolute z-20 w-full mt-2 bg-white border border-border-default rounded-xl shadow-floating max-h-[260px] overflow-y-auto animate-slide-up">
                  {filtered.length === 0 ? (
                    <div className="px-4 py-3 text-[13px] text-text-muted font-body">
                      {t('login.noResult')}
                    </div>
                  ) : (
                    filtered.map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => handleSelect(m)}
                        className={`w-full text-left px-4 py-2.5 text-[14px] font-body flex items-center justify-between gap-2 transition-colors first:rounded-t-xl last:rounded-b-xl ${
                          selectedMetier === m
                            ? 'bg-lecko-blue/8 text-lecko-blue font-semibold'
                            : 'text-text-body hover:bg-surface-elevated'
                        }`}
                      >
                        {m}
                        {selectedMetier === m && <Check size={15} className="text-lecko-blue shrink-0" />}
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={!selectedMetier || loading}
            className={`w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-display font-bold text-[15px] tracking-[0.01em] transition-all duration-base ${
              !selectedMetier && !loading
                ? 'bg-surface-elevated text-text-muted cursor-not-allowed border border-border-default'
                : 'bg-lecko-blue text-white hover:bg-lecko-blue/90 active:scale-[0.98] shadow-elevated'
            }`}
          >
            {loading ? t('login.loading') : t('login.start')}
            {!loading && selectedMetier && <ArrowRight size={18} />}
          </button>
        </form>
      </div>
    </div>
  );
}
