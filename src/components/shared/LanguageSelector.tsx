import { useTranslation } from 'react-i18next';
import { setLanguage } from '../../i18n';

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const current = i18n.language;

  return (
    <div className="flex items-center gap-1 text-[13px] font-body">
      <button
        onClick={() => setLanguage('fr')}
        className={`px-2 py-1 rounded transition-colors ${
          current === 'fr'
            ? 'text-lecko-blue font-semibold bg-lecko-blue/8'
            : 'text-text-muted hover:text-text-body'
        }`}
      >
        FR
      </button>
      <span className="text-border-default">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded transition-colors ${
          current === 'en'
            ? 'text-lecko-blue font-semibold bg-lecko-blue/8'
            : 'text-text-muted hover:text-text-body'
        }`}
      >
        EN
      </button>
    </div>
  );
}
