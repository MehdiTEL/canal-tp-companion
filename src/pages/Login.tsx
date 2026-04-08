import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Search, Check, BookOpen, Zap, FolderOpen, Lightbulb, Sparkles } from 'lucide-react';
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

  const features = [
    { icon: BookOpen, titleKey: 'login.feat1Title', descKey: 'login.feat1Desc', color: '#06B6D4' },
    { icon: FolderOpen, titleKey: 'login.feat2Title', descKey: 'login.feat2Desc', color: '#2563EB' },
    { icon: Lightbulb, titleKey: 'login.feat3Title', descKey: 'login.feat3Desc', color: '#F59E0B' },
    { icon: Zap, titleKey: 'login.feat4Title', descKey: 'login.feat4Desc', color: '#8B5CF6' },
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-surface-app">
      {/* Language selector — top right, always visible */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSelector />
      </div>

      {/* ─── LEFT PANEL — Branding + visual explanation ─── */}
      <div className="relative lg:w-[55%] lg:min-h-screen bg-gradient-to-br from-[#1e3a5f] via-[#1a2e4a] to-[#0f1d33] px-6 py-8 sm:px-10 lg:px-14 lg:py-16 flex flex-col justify-center overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lecko-blue/8 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 animate-gentle-float" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-sprint-3/10 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 animate-gentle-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/4 w-[200px] h-[200px] bg-sprint-warmup/8 rounded-full blur-[80px] animate-gentle-float" style={{ animationDelay: '5s' }} />

        {/* Gradient accent line on the right edge */}
        <div className="hidden lg:block absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-sprint-warmup via-lecko-blue to-sprint-3 opacity-40" />

        <div className="relative max-w-xl mx-auto lg:mx-0 animate-slide-up">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[28px] sm:text-[34px] font-display font-extrabold text-white tracking-tight leading-none">Lecko.</span>
            <span className="text-white/30 text-xl font-light leading-none">×</span>
            <span className="text-[28px] sm:text-[34px] font-display font-extrabold text-white tracking-[0.08em] leading-none">CANAL+</span>
          </div>

          {/* Session badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
            <Sparkles size={13} className="text-lecko-orange" />
            <span className="text-[11px] font-display font-bold uppercase tracking-[0.15em] text-white/70">
              {t('login.session')}
            </span>
          </div>

          {/* Hero title */}
          <h1 className="font-display font-extrabold text-[32px] sm:text-[40px] lg:text-[46px] text-white tracking-tight leading-[1.1] mb-4">
            {t('login.title')}
          </h1>

          {/* Description */}
          <p className="text-[16px] sm:text-[18px] text-white/60 font-body leading-relaxed mb-10 max-w-lg">
            {t('login.description')}
          </p>

          {/* Feature grid — 2×2 (hidden on small mobile to keep form visible) */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feat, idx) => (
              <div
                key={feat.titleKey}
                className="flex items-start gap-3 bg-white/[0.06] backdrop-blur-sm rounded-xl px-4 py-3.5 border border-white/[0.08] hover:bg-white/[0.10] hover:border-white/[0.15] transition-all duration-base cursor-default group/feat animate-slide-up"
                style={{ animationDelay: `${150 + idx * 80}ms` }}
              >
                <div
                  className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center group-hover/feat:scale-110 transition-transform duration-base"
                  style={{ backgroundColor: `${feat.color}20` }}
                >
                  <feat.icon size={18} style={{ color: feat.color }} />
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-display font-bold text-white leading-snug">
                    {t(feat.titleKey)}
                  </p>
                  <p className="text-[12px] text-white/45 font-body leading-snug mt-0.5">
                    {t(feat.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── RIGHT PANEL — Form ─── */}
      <div className="flex-1 flex items-center justify-center px-6 py-10 sm:px-10 lg:px-14">
        <div className="w-full max-w-[420px] animate-slide-up" style={{ animationDelay: '100ms' }}>
          {/* Mobile-only: show logo above form since left panel is compact on mobile */}
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center gap-2.5">
              <span className="text-[22px] font-display font-extrabold text-lecko-blue tracking-tight">Lecko.</span>
              <span className="text-border-strong text-sm font-light">×</span>
              <span className="text-[22px] font-display font-extrabold text-canal-black tracking-[0.08em]">CANAL+</span>
            </div>
          </div>

          {/* Form card */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.04)] border border-border-default/40 space-y-6">
            {/* Heading */}
            <div>
              <h2 className="text-[22px] sm:text-[24px] font-display font-extrabold text-text-on-light tracking-tight leading-snug mb-1.5">
                {t('login.metierLabel')}
              </h2>
              <p className="text-[14px] text-text-muted font-body leading-relaxed">
                {t('login.metierHelper')}
              </p>
            </div>

            {/* Search / Select */}
            <div ref={dropdownRef} className="relative" role="combobox" aria-expanded={isOpen} aria-haspopup="listbox" aria-owns="metier-listbox">
              <div
                className={`flex items-center gap-2.5 border-2 rounded-xl px-4 py-4 bg-surface-app/50 transition-all duration-base cursor-text ${
                  isOpen
                    ? 'border-lecko-blue bg-white ring-2 ring-lecko-blue/10 shadow-glow'
                    : selectedMetier
                      ? 'border-success/40 bg-success/[0.03]'
                      : 'border-border-default hover:border-lecko-blue/40 hover:bg-white hover:shadow-card'
                }`}
                onClick={() => { setIsOpen(true); inputRef.current?.focus(); }}
              >
                <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-base ${
                  isOpen ? 'bg-lecko-blue/10' : selectedMetier ? 'bg-success/10' : 'bg-surface-elevated'
                }`}>
                  <Search size={16} className={`transition-colors duration-base ${isOpen ? 'text-lecko-blue' : selectedMetier ? 'text-success' : 'text-text-muted'}`} aria-hidden="true" />
                </div>
                {selectedMetier && !isOpen ? (
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-[15px] font-body font-semibold text-text-on-light">{selectedMetier}</span>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setSelectedMetier(null); setIsOpen(true); inputRef.current?.focus(); }}
                      className="text-[12px] text-text-muted hover:text-lecko-blue ml-auto transition-colors font-medium"
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
                    aria-label={t('login.metierLabel')}
                    aria-autocomplete="list"
                    aria-controls="metier-listbox"
                    className="flex-1 text-[15px] font-body text-text-on-light placeholder:text-text-muted/50 bg-transparent outline-none"
                  />
                )}
              </div>

              {!isOpen && !selectedMetier && (
                <p className="text-[12px] text-lecko-blue/60 font-body mt-2 pl-1 animate-fade-in">
                  ↑ {t('login.clickHint')}
                </p>
              )}

              {isOpen && (
                <ul id="metier-listbox" role="listbox" aria-label={t('login.metierLabel')} className="absolute z-20 w-full mt-2 bg-white border border-border-default rounded-xl shadow-floating max-h-[280px] overflow-y-auto animate-slide-up">
                  {filtered.length === 0 ? (
                    <li className="px-4 py-3 text-[13px] text-text-muted font-body" role="option" aria-selected={false}>
                      {t('login.noResult')}
                    </li>
                  ) : (
                    filtered.map((m) => (
                      <li
                        key={m}
                        role="option"
                        aria-selected={selectedMetier === m}
                        onClick={() => handleSelect(m)}
                        className={`w-full text-left px-4 py-2.5 text-[14px] font-body flex items-center justify-between gap-2 transition-all duration-fast first:rounded-t-xl last:rounded-b-xl border-l-2 cursor-pointer ${
                          selectedMetier === m
                            ? 'bg-lecko-blue/8 text-lecko-blue font-semibold border-l-lecko-blue'
                            : 'text-text-body hover:bg-surface-elevated hover:pl-5 border-l-transparent hover:border-l-lecko-blue/40'
                        }`}
                      >
                        {m}
                        {selectedMetier === m && <Check size={15} className="text-lecko-blue shrink-0" aria-hidden="true" />}
                      </li>
                    ))
                  )}
                </ul>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!selectedMetier || loading}
              className={`w-full flex items-center justify-center gap-2 px-4 py-4 rounded-xl font-display font-bold text-[16px] tracking-[0.01em] transition-all duration-base relative overflow-hidden group/btn ${
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

          {/* Reassurance footer */}
          <p className="text-center text-[12px] text-text-muted/60 font-body mt-5">
            {t('login.footer')}
          </p>
        </div>
      </div>
    </div>
  );
}
