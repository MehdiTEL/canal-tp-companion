import { useNavigate } from 'react-router-dom';
import { Flame, FileText, Zap, Bot, ChevronRight, CheckCircle2, Lock, LockOpen, ArrowLeft, RotateCcw } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { ProgressBar } from '../components/shared/ProgressBar';
import { SessionFlow } from '../components/shared/SessionFlow';

const sprints = [
  {
    id: 'echauffement',
    path: '/echauffement',
    title: 'Echauffement',
    subtitle: 'Explorez un sujet avec Copilot Chat',
    duration: '10 min',
    icon: Flame,
    color: '#06B6D4',
  },
  {
    id: 'sprint-1',
    path: '/sprint-1',
    title: 'Sprint 1 — Cas pratique',
    subtitle: 'Organiser une soiree STUDIOCANAL STORIES',
    duration: '25 min',
    icon: FileText,
    color: '#2563EB',
    requires: "l'Echauffement",
  },
  {
    id: 'sprint-2',
    path: '/sprint-2',
    title: 'Sprint 2 — Challenge collectif',
    subtitle: 'Preparer une reunion de lancement de projet',
    duration: '30 min',
    icon: Zap,
    color: '#F59E0B',
    requires: 'le Sprint 1',
  },
  {
    id: 'sprint-3',
    path: '/sprint-3',
    title: 'Sprint 3 — Agent Lite',
    subtitle: 'Concevez et testez votre propre agent IA',
    duration: '30 min',
    icon: Bot,
    color: '#8B5CF6',
    requires: 'le Sprint 2',
  },
];

interface DashboardProps {
  onChangeMetier?: () => void;
}

export function Dashboard({ onChangeMetier }: DashboardProps) {
  const navigate = useNavigate();
  const { getSprintCompletion, isSprintStarted, isSprintUnlocked, justUnlocked } = useProgress();

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      {/* Welcome banner */}
      <div className="bg-white rounded-2xl shadow-card border border-border-subtle/50 px-5 py-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-display font-extrabold text-[18px] text-text-on-light tracking-tight">
              Tirez parti de Copilot Chat au quotidien
            </h1>
            <p className="text-[13px] text-text-muted font-body mt-1">
              Suivez la formation sur Teams et completez les exercices ici. Chaque sprint se debloque en terminant le precedent.
            </p>
          </div>
          {onChangeMetier && (
            <button
              onClick={onChangeMetier}
              className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border-default text-[13px] font-body font-medium text-text-body hover:bg-surface-elevated hover:border-border-strong transition-all duration-fast"
            >
              <ArrowLeft size={14} className="text-text-muted" />
              Changer de metier
            </button>
          )}
        </div>
        <button
          onClick={() => {
            if (window.confirm('Remettre toute la progression a zero ? Cette action est irreversible.')) {
              localStorage.removeItem('canal-tp-submissions');
              window.location.reload();
            }
          }}
          className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-red-200 text-[15px] font-display font-bold text-red-500 hover:bg-red-50 hover:border-red-400 active:scale-[0.98] transition-all duration-fast"
        >
          <RotateCcw size={18} />
          Reinitialiser ma progression
        </button>
      </div>

      {/* Session flow diagram */}
      <div className="bg-white rounded-2xl shadow-card border border-border-subtle/50 p-4">
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
          const unlocked = isSprintUnlocked(sprint.id);
          const isJustUnlocked = sprint.id === justUnlocked;

          return (
            <button
              key={sprint.id}
              onClick={() => (unlocked || isJustUnlocked) && navigate(sprint.path)}
              disabled={!unlocked && !isJustUnlocked}
              className={`w-full bg-white rounded-xl shadow-card border border-border-subtle/40 p-4 flex items-center gap-4 transition-all duration-base text-left group ${
                unlocked || isJustUnlocked
                  ? 'hover:shadow-elevated hover:border-border-default active:scale-[0.995] cursor-pointer'
                  : 'opacity-50 cursor-not-allowed'
              }`}
              style={{
                borderLeft: unlocked && started ? `4px solid ${sprint.color}` : '4px solid transparent',
              }}
            >
              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 relative ${isJustUnlocked ? 'animate-unlock-glow' : ''}`}
                style={{
                  backgroundColor: unlocked || isJustUnlocked ? `${sprint.color}12` : '#F3F4F6',
                  '--unlock-color': `${sprint.color}60`,
                } as React.CSSProperties}
              >
                {isJustUnlocked ? (
                  <>
                    <LockOpen size={20} className="absolute animate-unlock-shake" style={{ color: sprint.color }} />
                    <sprint.icon size={20} className="absolute animate-unlock-appear" style={{ color: sprint.color }} />
                  </>
                ) : unlocked ? (
                  <sprint.icon size={20} style={{ color: sprint.color }} />
                ) : (
                  <Lock size={18} className="text-text-muted/50" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className={`font-display font-bold text-[15px] tracking-tight ${unlocked || isJustUnlocked ? 'text-text-on-light' : 'text-text-muted'}`}>
                    {sprint.title}
                  </h2>
                  {isComplete && <CheckCircle2 size={15} className="text-success" />}
                </div>
                {unlocked || isJustUnlocked ? (
                  <p className={`text-[13px] mt-0.5 font-body ${isJustUnlocked ? 'text-text-on-light font-semibold animate-fade-in' : 'text-text-muted'}`}>
                    {isJustUnlocked ? 'Debloque ! Continuez la formation, vous pourrez y acceder apres.' : sprint.subtitle}
                  </p>
                ) : (
                  <p className="text-[12px] text-text-muted/70 mt-0.5 font-body italic">
                    Terminez {sprint.requires} pour debloquer
                  </p>
                )}
                {started && !isComplete && unlocked && (
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
                {unlocked ? (
                  <ChevronRight
                    size={18}
                    className="text-border-default group-hover:text-text-muted transition-colors"
                  />
                ) : (
                  <Lock size={14} className="text-text-muted/40" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
