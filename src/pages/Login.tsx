import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Globe, Search, Check } from 'lucide-react';

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
  const [selectedMetier, setSelectedMetier] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Normalize for accent-insensitive search
  const normalize = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const filtered = search.trim()
    ? metiers.filter((m) => normalize(m).includes(normalize(search)))
    : metiers;

  // Close dropdown on outside click
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
      onLogin(selectedMetier, lang);
    }
  };

  return (
    <div
      className="min-h-screen bg-surface-app flex flex-col items-center justify-start p-4 pt-8 sm:pt-12"
      style={{ background: 'linear-gradient(180deg, #FAFBFE 0%, #EEF2FF 100%)' }}
    >
      <div className="w-full max-w-md animate-slide-up">
        {/* Language toggle */}
        <div className="flex justify-end mb-6">
          <button
            type="button"
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border-default bg-surface-card text-[13px] font-body text-text-body hover:bg-surface-elevated transition-all duration-fast"
          >
            <Globe size={14} className="text-text-muted" />
            {lang === 'fr' ? 'Francais' : 'English'}
          </button>
        </div>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="text-3xl font-display font-bold text-lecko-blue tracking-tight">lecko.</span>
            <span className="text-border-default text-2xl font-light">x</span>
            <span className="text-3xl font-display font-bold text-canal-black tracking-wider">CANAL+</span>
          </div>
          <p className="text-[15px] text-text-body font-body">
            {lang === 'fr' ? 'Formation IA / Copilot Chat' : 'AI / Copilot Chat Training'}
          </p>
          <p className="text-[13px] text-text-muted font-body mt-1">
            Session Pilote 2026
          </p>
        </div>

        {/* Metier selection */}
        <form onSubmit={handleSubmit} className="bg-surface-card rounded-xl p-6 shadow-elevated space-y-5">
          <div>
            <p className="text-[14px] font-display font-bold text-text-on-light mb-1">
              {lang === 'fr' ? 'Quel est votre metier ?' : 'What is your role?'}
            </p>
            <p className="text-[13px] text-text-muted font-body mb-3">
              {lang === 'fr'
                ? 'Identifiez votre equipe metier pour demarrer le TP. Tapez les premieres lettres ou parcourez la liste.'
                : 'Find your team to start the workshop. Type the first letters or browse the list.'}
            </p>

            {/* Searchable dropdown */}
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
                      Changer
                    </button>
                  </div>
                ) : (
                  <input
                    ref={inputRef}
                    type="text"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value); setIsOpen(true); }}
                    onFocus={() => setIsOpen(true)}
                    placeholder={lang === 'fr' ? 'Rechercher votre metier...' : 'Search your role...'}
                    className="flex-1 text-[14px] font-body text-text-on-light placeholder:text-text-muted/60 bg-transparent outline-none"
                  />
                )}
              </div>

              {/* Dropdown list */}
              {isOpen && (
                <div className="absolute z-20 w-full mt-1.5 bg-white border border-border-default rounded-lg shadow-floating max-h-[260px] overflow-y-auto animate-slide-up">
                  {filtered.length === 0 ? (
                    <div className="px-4 py-3 text-[13px] text-text-muted font-body">
                      {lang === 'fr' ? 'Aucun metier trouve' : 'No role found'}
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
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-surface-dark text-white font-display font-bold text-[15px] tracking-[0.01em] hover:bg-surface-dark/90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-base"
          >
            {loading
              ? (lang === 'fr' ? 'Connexion...' : 'Connecting...')
              : (lang === 'fr' ? 'Commencer la session' : 'Start session')}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>
      </div>
    </div>
  );
}
