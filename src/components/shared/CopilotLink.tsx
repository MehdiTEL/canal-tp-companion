import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';

interface CopilotLinkProps {
  color: string;
}

export function CopilotLink({ color }: CopilotLinkProps) {
  const { t } = useTranslation();

  return (
    <a
      href="https://m365.cloud.microsoft/chat"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2.5 w-full px-4 py-3 rounded-lg text-white font-display font-bold text-[15px] hover:opacity-90 active:scale-[0.98] transition-all duration-base shadow-card"
      style={{ backgroundColor: color }}
    >
      <ExternalLink size={18} />
      {t('copilotLink.open')}
    </a>
  );
}
