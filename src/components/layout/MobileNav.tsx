import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Flame, FileText, Zap, Bot, Lock, LockOpen } from 'lucide-react';
import { useProgress } from '../../hooks/useProgress';

const navItems = [
  { to: '/dashboard', label: 'Home', icon: LayoutDashboard, color: '#6B7280', sprintId: null },
  { to: '/echauffement', label: 'Echauff.', icon: Flame, color: '#06B6D4', sprintId: 'echauffement' },
  { to: '/sprint-1', label: 'Sprint 1', icon: FileText, color: '#2563EB', sprintId: 'sprint-1' },
  { to: '/sprint-2', label: 'Sprint 2', icon: Zap, color: '#F59E0B', sprintId: 'sprint-2' },
  { to: '/sprint-3', label: 'Sprint 3', icon: Bot, color: '#8B5CF6', sprintId: 'sprint-3' },
];

export function MobileNav() {
  const { isSprintUnlocked, justUnlocked } = useProgress();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-border-subtle z-30">
      <div className="flex items-center justify-around py-1.5 px-1">
        {navItems.map((item) => {
          const unlocked = item.sprintId ? isSprintUnlocked(item.sprintId) : true;
          const isJustUnlocked = item.sprintId === justUnlocked;

          // Just unlocked — show animation
          if (isJustUnlocked) {
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg text-[10px] font-body min-w-[52px] font-semibold"
                style={{ color: item.color }}
              >
                <div
                  className="relative w-[18px] h-[18px] animate-unlock-glow rounded-full"
                  style={{ '--unlock-color': `${item.color}60` } as React.CSSProperties}
                >
                  <LockOpen size={18} className="absolute inset-0 animate-unlock-shake" style={{ color: item.color }} />
                  <item.icon size={18} className="absolute inset-0 animate-unlock-appear" style={{ color: item.color }} />
                </div>
                <span>{item.label}</span>
              </NavLink>
            );
          }

          if (!unlocked) {
            return (
              <div
                key={item.to}
                className="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg text-[10px] font-body min-w-[52px] text-text-muted/40 cursor-not-allowed"
              >
                <Lock size={16} />
                <span>{item.label}</span>
              </div>
            );
          }

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg text-[10px] font-body transition-all duration-fast min-w-[52px] ${
                  isActive ? 'font-semibold bg-surface-elevated' : 'text-text-muted'
                }`
              }
              style={({ isActive }) => (isActive ? { color: item.color } : {})}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
