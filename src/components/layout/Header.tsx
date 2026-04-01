import { LogOut, Briefcase } from 'lucide-react';
import { ProgressBar } from '../shared/ProgressBar';

interface HeaderProps {
  metier?: string;
  onLogout?: () => void;
}

export function Header({ metier, onLogout }: HeaderProps) {
  return (
    <header className="bg-surface-card border-b border-border-subtle sticky top-0 z-30">
      <div className="px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-lg font-display font-bold text-lecko-blue tracking-tight">lecko.</span>
          <span className="text-border-default text-sm font-light">x</span>
          <span className="text-lg font-display font-bold text-canal-black tracking-wider">CANAL+</span>
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
