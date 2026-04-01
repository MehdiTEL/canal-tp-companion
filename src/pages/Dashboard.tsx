import { useNavigate } from 'react-router-dom';
import { Flame, FileText, Zap, Bot, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { ProgressBar } from '../components/shared/ProgressBar';
import { SessionFlow } from '../components/shared/SessionFlow';

const sprints = [
  {
    id: 'echauffement',
    path: '/echauffement',
    title: 'Echauffement',
    subtitle: 'Veille rapide avec Copilot Chat',
    duration: '10 min',
    icon: Flame,
    color: '#06B6D4',
  },
  {
    id: 'sprint-1',
    path: '/sprint-1',
    title: 'Sprint 1 — Cas pratique',
    subtitle: '3 scenarios au choix, plusieurs etapes guidees',
    duration: '25 min',
    icon: FileText,
    color: '#2563EB',
  },
  {
    id: 'sprint-2',
    path: '/sprint-2',
    title: 'Sprint 2 — Challenge collectif',
    subtitle: '6 cas d\'usage, 3 exercices par cas',
    duration: '30 min',
    icon: Zap,
    color: '#F59E0B',
  },
  {
    id: 'sprint-3',
    path: '/sprint-3',
    title: 'Sprint 3 — Agent Lite',
    subtitle: 'Concevez et testez votre propre agent IA',
    duration: '30 min',
    icon: Bot,
    color: '#8B5CF6',
  },
];

export function Dashboard() {
  const navigate = useNavigate();
  const { getSprintCompletion, isSprintStarted } = useProgress();

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Session flow diagram */}
      <div className="bg-surface-card rounded-xl shadow-card p-4">
        <SessionFlow />
      </div>

      {/* Mobile progress */}
      <div className="md:hidden">
        <ProgressBar />
      </div>

      {/* Sprint cards */}
      <div className="space-y-2.5">
        {sprints.map((sprint) => {
          const completion = getSprintCompletion(sprint.id);
          const started = isSprintStarted(sprint.id);
          const isComplete = completion === 1;

          return (
            <button
              key={sprint.id}
              onClick={() => navigate(sprint.path)}
              className="w-full bg-surface-card rounded-xl shadow-card p-4 flex items-center gap-4 hover:shadow-elevated active:scale-[0.995] transition-all duration-base text-left group"
              style={{
                borderLeft: started ? `4px solid ${sprint.color}` : '4px solid transparent',
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${sprint.color}12` }}
              >
                <sprint.icon size={20} style={{ color: sprint.color }} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="font-display font-bold text-[15px] text-text-on-light tracking-tight">
                    {sprint.title}
                  </h2>
                  {isComplete && <CheckCircle2 size={15} className="text-success" />}
                </div>
                <p className="text-[13px] text-text-muted mt-0.5 font-body">{sprint.subtitle}</p>
                {started && !isComplete && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex-1 h-1 bg-border-default rounded-full overflow-hidden max-w-[160px]">
                      <div
                        className="h-full rounded-full transition-all duration-slow"
                        style={{ width: `${completion * 100}%`, backgroundColor: sprint.color }}
                      />
                    </div>
                    <span className="text-[11px] font-semibold" style={{ color: sprint.color }}>
                      {Math.round(completion * 100)}%
                    </span>
                  </div>
                )}
              </div>

              {/* Duration + arrow */}
              <div className="shrink-0 flex flex-col items-end gap-1">
                <span className="text-[11px] font-semibold text-text-muted font-body">{sprint.duration}</span>
                <ChevronRight
                  size={18}
                  className="text-border-default group-hover:text-text-muted transition-colors"
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
