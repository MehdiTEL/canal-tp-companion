import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Search, Check } from 'lucide-react';
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
      onLogin(selectedMetier, 'fr');
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start p-4 pt-8 sm:pt-16"
      style={{ background: 'linear-gradient(165deg, #FAFBFE 0%, #EBF0FF 50%, #F5F3FF 100%)' }}
    >
      {/* Language selector — top right */}
      <div className="absolute top-4 right-4">
        <LanguageSelector />
      </div>

      <div className="w-full max-w-md animate-slide-up">
        {/* Logo */}
        <div className="text-center mb-8 mt-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[32px] font-display font-extrabold text-lecko-blue tracking-tight leading-none">Lecko.</span>
            <span className="text-border-strong text-xl font-light leading-none">×</span>
            <span className="text-[32px] font-display font-extrabold text-canal-black tracking-[0.08em] leading-none">CANAL+</span>
          </div>
          <p className="text-[15px] text-text-body font-body font-medium">
            {t('login.title')}
          </p>
          <p className="text-[12px] text-text-muted font-body mt-1 uppercase tracking-widest font-semibold">
            Session Pilote 2026
          </p>
        </div>

        {/* Metier selection */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-elevated border border-border-subtle/60 space-y-5">
          <div>
            <p className="text-[14px] font-display font-bold text-text-on-light mb-1">
              {t('login.metierLabel')}
            </p>
            <p className="text-[13px] text-text-muted font-body mb-3">
              {t('login.metierHelper')}
            </p>

            <div ref={dropdownRef} className="relative">
              <div
                className={`flex items-center gap-2 border rounded-lg px-3 py-2.5 bg-white transition-all duration-fast cursor-text ${
                  isOpen
                    ? 'border-lecko-blue ring-2 ring-lecko-blue/20'
                    : 'border-border-default hover:border-lecko-blue/40'
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
                      className="text-[11px] text-text-muted hover:text-text-body ml-auto"
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
                <div className="absolute z-20 w-full mt-1.5 bg-white border border-border-default rounded-lg shadow-floating max-h-[260px] overflow-y-auto animate-slide-up">
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
                        className={`w-full text-left px-4 py-2.5 text-[14px] font-body flex items-center justify-between gap-2 transition-colors ${
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
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-lecko-blue text-white font-display font-bold text-[15px] tracking-[0.01em] hover:bg-lecko-blue/90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-base shadow-card"
          >
            {loading ? t('login.loading') : t('login.start')}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>
      </div>
    </div>
  );
}
