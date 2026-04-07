import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LayoutDashboard, Flame, FileText, Zap, Bot, Lock, LockOpen, RotateCcw } from 'lucide-react';
import { useProgress } from '../../hooks/useProgress';

export function Sidebar() {
  const { t } = useTranslation();
  const { getSprintCompletion, isSprintStarted, isSprintUnlocked, justUnlocked } = useProgress();

  const navItems = [
    { to: '/dashboard', label: t('nav.home'), icon: LayoutDashboard, color: '#6B7280', sprintId: null },
    { to: '/echauffement', label: t('nav.echauffement'), icon: Flame, color: '#06B6D4', sprintId: 'echauffement' },
    { to: '/sprint-1', label: t('nav.sprint1'), icon: FileText, color: '#2563EB', sprintId: 'sprint-1' },
    { to: '/sprint-2', label: t('nav.sprint2'), icon: Zap, color: '#F59E0B', sprintId: 'sprint-2' },
    { to: '/sprint-3', label: t('nav.sprint3'), icon: Bot, color: '#8B5CF6', sprintId: 'sprint-3' },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-52 bg-white/60 backdrop-blur-sm border-r border-border-subtle h-[calc(100vh-49px)] sticky top-[49px]">
      <nav className="flex-1 py-4 px-2.5 space-y-0.5">
        {navItems.map((item) => {
          const sprintId = item.sprintId;
          const completion = sprintId ? getSprintCompletion(sprintId) : 0;
          const started = sprintId ? isSprintStarted(sprintId) : false;
          const unlocked = sprintId ? isSprintUnlocked(sprintId) : true;
          const isJustUnlocked = sprintId === justUnlocked;

          // Just unlocked — animated transition
          if (isJustUnlocked) {
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className="flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] font-body font-semibold text-text-on-light"
              >
                <div
                  className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 relative animate-unlock-glow"
                  style={{
                    backgroundColor: `${item.color}15`,
                    '--unlock-color': `${item.color}60`,
                  } as React.CSSProperties}
                >
                  <LockOpen size={14} className="absolute animate-unlock-shake" style={{ color: item.color }} />
                  <item.icon size={16} className="absolute animate-unlock-appear" style={{ color: item.color }} />
                </div>
                <span className="flex-1 truncate">{item.label}</span>
              </NavLink>
            );
          }

          if (!unlocked) {
            return (
              <div
                key={item.to}
                className="flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] font-body text-text-muted/50 cursor-not-allowed"
              >
                <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0">
                  <Lock size={14} className="text-text-muted/40" />
                </div>
                <span className="flex-1 truncate">{item.label}</span>
              </div>
            );
          }

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-2.5 px-3 py-2 rounded-md text-[13px] font-body transition-all duration-fast ${
                  isActive
                    ? 'bg-surface-card shadow-card font-semibold text-text-on-light'
                    : 'text-text-body hover:bg-surface-card/60'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: isActive ? `${item.color}15` : 'transparent',
                    }}
                  >
                    <item.icon size={16} style={{ color: item.color }} />
                  </div>
                  <span className="flex-1 truncate">{item.label}</span>
                  {sprintId && started && (
                    <span
                      className="text-[11px] font-semibold"
                      style={{ color: item.color }}
                    >
                      {Math.round(completion * 100)}%
                    </span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-2.5 border-t border-border-subtle">
        <button
          onClick={() => {
            if (window.confirm(t('dashboard.resetConfirm'))) {
              localStorage.removeItem('canal-tp-submissions');
              window.location.reload();
            }
          }}
          className="flex items-center gap-2.5 px-3 py-2 rounded-md text-[12px] font-body text-text-muted hover:text-red-500 hover:bg-red-50 transition-all duration-fast w-full"
        >
          <RotateCcw size={13} />
          <span>{t('dashboard.resetButton')}</span>
        </button>
      </div>
    </aside>
  );
}
