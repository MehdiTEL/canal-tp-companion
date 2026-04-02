import { LogOut, Briefcase } from 'lucide-react';
import { ProgressBar } from '../shared/ProgressBar';

interface HeaderProps {
  metier?: string;
  onLogout?: () => void;
}

export function Header({ metier, onLogout }: HeaderProps) {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-border-subtle sticky top-0 z-30">
      <div className="px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="text-[17px] font-display font-extrabold text-lecko-blue tracking-tight leading-none">Lecko.</span>
          <span className="text-border-strong text-[13px] font-light leading-none">×</span>
          <span className="text-[17px] font-display font-extrabold text-canal-black tracking-[0.08em] leading-none">CANAL+</span>
        </div>

        {/* Progress bar */}
        <div className="hidden md:block flex-1 max-w-sm">
          <ProgressBar />
        </div>

        {/* User info */}
        {metier && (
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 text-[13px] text-text-body font-body">
              <Briefcase size={13} className="text-text-muted" />
              <span className="font-semibold">{metier}</span>
            </div>
            {onLogout && (
              <button
                onClick={onLogout}
                className="p-2 rounded-md hover:bg-surface-elevated text-text-muted hover:text-text-body transition-colors"
                aria-label="Se deconnecter"
              >
                <LogOut size={15} />
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
