import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Search, Check, Sparkles, BookOpen, Zap } from 'lucide-react';
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
        <div className="relative overflow-hidden bg-white rounded-2xl shadow-elevated border border-border-default mb-5 hover-lift">
          {/* Colored accent bar */}
          <div className="h-1.5 bg-gradient-to-r from-sprint-warmup via-lecko-blue to-sprint-3" />

          {/* Subtle decorative blurs */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-lecko-blue/5 rounded-full blur-3xl -translate-y-8 translate-x-8 animate-gentle-float" />
          <div className="absolute bottom-0 left-0 w-28 h-28 bg-sprint-3/5 rounded-full blur-2xl translate-y-6 -translate-x-6 animate-gentle-float" style={{ animationDelay: '3s' }} />

          <div className="relative px-5 py-5 sm:px-6">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={16} className="text-lecko-orange" />
              <span className="text-[11px] font-display font-bold uppercase tracking-wider text-text-muted">{t('login.subtitle')}</span>
            </div>
            <h1 className="font-display font-extrabold text-[20px] sm:text-[22px] text-text-on-light tracking-tight leading-snug mb-3">
              {t('login.title')}
            </h1>
            <p className="text-[13px] sm:text-[14px] text-text-muted font-body leading-relaxed mb-4">
              {t('login.description')}
            </p>

            {/* 3 highlights */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: BookOpen, label: '4 sprints', color: '#06B6D4' },
                { icon: Zap, label: 'Copilot Chat', color: '#8B5CF6' },
              ].map((item) => (
                <span key={item.label} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border-default text-[11px] font-body font-semibold text-text-body bg-surface-elevated/50 hover:border-border-strong hover:shadow-card transition-all duration-base cursor-default group/badge">
                  <item.icon size={12} style={{ color: item.color }} className="group-hover/badge:scale-110 transition-transform duration-base" />
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
                        className={`w-full text-left px-4 py-2.5 text-[14px] font-body flex items-center justify-between gap-2 transition-all duration-fast first:rounded-t-xl last:rounded-b-xl border-l-2 ${
                          selectedMetier === m
                            ? 'bg-lecko-blue/8 text-lecko-blue font-semibold border-l-lecko-blue'
                            : 'text-text-body hover:bg-surface-elevated hover:pl-5 border-l-transparent hover:border-l-lecko-blue/40'
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
            className={`w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-display font-bold text-[15px] tracking-[0.01em] transition-all duration-base relative overflow-hidden group/btn ${
              !selectedMetier && !loading
                ? 'bg-surface-elevated text-text-muted cursor-not-allowed border border-border-default'
                : 'bg-lecko-blue text-white hover:bg-lecko-blue/90 hover:shadow-glow active:scale-[0.97] shadow-elevated'
            }`}
          >
            {selectedMetier && !loading && (
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
            )}
            <span className="relative">{loading ? t('login.loading') : t('login.start')}</span>
            {!loading && selectedMetier && <ArrowRight size={18} className="relative group-hover/btn:translate-x-0.5 transition-transform duration-base" />}
          </button>
        </form>
      </div>
    </div>
  );
}
