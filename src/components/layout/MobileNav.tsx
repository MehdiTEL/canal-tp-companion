import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Flame, FileText, Zap, Bot } from 'lucide-react';

const navItems = [
  { to: '/dashboard', label: 'Home', icon: LayoutDashboard, color: '#6B7280' },
  { to: '/echauffement', label: 'Echauff.', icon: Flame, color: '#06B6D4' },
  { to: '/sprint-1', label: 'Sprint 1', icon: FileText, color: '#2563EB' },
  { to: '/sprint-2', label: 'Sprint 2', icon: Zap, color: '#F59E0B' },
  { to: '/sprint-3', label: 'Sprint 3', icon: Bot, color: '#8B5CF6' },
];

export function MobileNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface-card border-t border-border-subtle z-30">
      <div className="flex items-center justify-around py-1.5 px-1">
        {navItems.map((item) => (
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
        ))}
      </div>
    </nav>
  );
}
