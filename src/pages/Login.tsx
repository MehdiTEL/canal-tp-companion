import { useState } from 'react';
import { ArrowRight, Globe } from 'lucide-react';

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
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

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
      <div className="w-full max-w-2xl animate-slide-up">
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
            <p className="text-[14px] font-display font-bold text-text-on-light mb-3.5">
              {lang === 'fr' ? 'Selectionnez votre metier' : 'Select your role'}
            </p>
            <div className="flex flex-wrap gap-2">
              {metiers.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setSelectedMetier(m)}
                  className={`px-3.5 py-2 rounded-full text-[13px] font-body border transition-all duration-fast active:scale-[0.96] ${
                    selectedMetier === m
                      ? 'bg-lecko-blue text-white border-lecko-blue font-semibold shadow-card'
                      : 'bg-surface-elevated text-text-body border-border-default hover:border-lecko-blue/40 hover:bg-surface-card'
                  }`}
                >
                  {m}
                </button>
              ))}
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
