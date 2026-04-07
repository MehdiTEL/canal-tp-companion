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
      className="flex items-center justify-center gap-2.5 w-full px-4 py-3.5 rounded-xl text-white font-display font-bold text-[15px] hover:opacity-90 active:scale-[0.98] transition-all duration-base shadow-elevated relative overflow-hidden group"
      style={{ backgroundColor: color }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      <ExternalLink size={18} className="relative" />
      <span className="relative">{t('copilotLink.open')}</span>
    </a>
  );
}
