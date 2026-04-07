import { useTranslation } from 'react-i18next';
import { Briefcase, RefreshCw } from 'lucide-react';

interface HeaderProps {
  metier?: string;
  onLogout?: () => void;
}

export function Header({ metier, onLogout }: HeaderProps) {
  const { t } = useTranslation();
  return (
    <header className="bg-gradient-to-r from-white via-white to-surface-elevated/50 backdrop-blur-lg border-b border-border-subtle sticky top-0 z-30 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0 group/logo cursor-default select-none">
          <div className="flex items-center gap-2.5">
            <span className="text-[18px] sm:text-[20px] font-display font-extrabold text-lecko-blue tracking-tight leading-none group-hover/logo:text-lecko-blue/80 transition-colors duration-base">
              Lecko<span className="text-lecko-blue/40">.</span>
            </span>
            <span className="text-border-strong/40 text-[14px] font-light leading-none group-hover/logo:rotate-90 transition-transform duration-300">×</span>
            <span className="text-[18px] sm:text-[20px] font-display font-extrabold text-canal-black tracking-[0.1em] leading-none group-hover/logo:text-canal-black/80 transition-colors duration-base">
              CANAL+
            </span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-border-default/60 mx-1" />
          <span className="hidden sm:block text-[11px] font-display font-bold uppercase tracking-[0.12em] text-text-muted/70 leading-tight">
            Formation IA
          </span>
        </div>

        {/* User info */}
        {metier && (
          <div className="flex items-center gap-2 shrink-0">
            {onLogout ? (
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-[13px] font-body bg-surface-elevated/80 hover:bg-surface-elevated border border-border-subtle hover:border-border-default hover:shadow-card transition-all duration-base group/metier"
                title={t('header.changeMetier')}
              >
                <div className="w-6 h-6 rounded-lg bg-lecko-blue/10 flex items-center justify-center group-hover/metier:bg-lecko-blue/15 transition-colors">
                  <Briefcase size={12} className="text-lecko-blue" />
                </div>
                <span className="font-semibold text-text-on-light max-w-[160px] truncate">{metier}</span>
                <RefreshCw size={11} className="text-text-muted group-hover/metier:text-lecko-blue group-hover/metier:rotate-180 transition-all duration-300 ml-0.5" />
              </button>
            ) : (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[13px] font-body bg-surface-elevated/60 border border-border-subtle">
                <Briefcase size={12} className="text-lecko-blue" />
                <span className="font-semibold text-text-on-light">{metier}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
