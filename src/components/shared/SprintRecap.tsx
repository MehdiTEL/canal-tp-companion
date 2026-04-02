import { useNavigate } from 'react-router-dom';
import { Trophy, ArrowRight, Home, Sparkles } from 'lucide-react';

interface SprintRecapProps {
  sprintTitle: string;
  sprintColor: string;
  exercisesCompleted: number;
  /** Name of next sprint to encourage the user, or null if last sprint */
  nextSprintLabel?: string | null;
  /** Custom encouragement message */
  message?: string;
}

const encouragements = [
  'Excellent travail !',
  'Bravo, bien joue !',
  'Tres beau parcours !',
  'Vous gerez !',
];

export function SprintRecap({
  sprintTitle,
  sprintColor,
  exercisesCompleted,
  nextSprintLabel,
  message,
}: SprintRecapProps) {
  const navigate = useNavigate();

  const encouragement = message || encouragements[Math.floor(Math.random() * encouragements.length)];

  return (
    <div className="max-w-lg mx-auto animate-slide-up">
      <div className="bg-white rounded-2xl shadow-elevated border border-border-subtle/50 overflow-hidden">
        {/* Colored header band */}
        <div
          className="px-6 py-8 text-center relative overflow-hidden"
          style={{ backgroundColor: sprintColor }}
        >
          {/* Decorative sparkles */}
          <Sparkles
            size={80}
            className="absolute top-2 right-4 text-white/10 animate-pulse-soft"
            strokeWidth={1}
          />
          <Sparkles
            size={40}
            className="absolute bottom-3 left-6 text-white/15 animate-pulse-soft"
            strokeWidth={1}
            style={{ animationDelay: '500ms' }}
          />

          {/* Trophy icon */}
          <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-4 animate-recap-trophy">
            <Trophy size={32} className="text-white" />
          </div>

          <h2 className="text-2xl font-display font-extrabold text-white tracking-tight">
            {sprintTitle}
          </h2>
          <p className="text-white/80 font-body text-[15px] mt-1">
            Termine avec succes
          </p>
        </div>

        {/* Stats & message */}
        <div className="px-6 py-6 space-y-5">
          {/* Encouragement */}
          <div className="text-center">
            <p className="text-[20px] font-display font-bold text-text-on-light animate-fade-in">
              {encouragement}
            </p>
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-6">
            <div className="text-center">
              <span
                className="text-[28px] font-display font-extrabold leading-none"
                style={{ color: sprintColor }}
              >
                {exercisesCompleted}
              </span>
              <p className="text-[12px] text-text-muted font-body mt-1">
                {exercisesCompleted > 1 ? 'exercices completes' : 'exercice complete'}
              </p>
            </div>
            <div className="w-px h-10 bg-border-default" />
            <div className="text-center">
              <span
                className="text-[28px] font-display font-extrabold leading-none"
                style={{ color: sprintColor }}
              >
                100%
              </span>
              <p className="text-[12px] text-text-muted font-body mt-1">
                de progression
              </p>
            </div>
          </div>

          {/* Next sprint info */}
          {nextSprintLabel && (
            <div
              className="rounded-lg px-4 py-3 text-center"
              style={{ backgroundColor: `${sprintColor}08`, border: `1px solid ${sprintColor}20` }}
            >
              <p className="text-[13px] font-body text-text-body">
                Prochain module :{' '}
                <span className="font-semibold" style={{ color: sprintColor }}>
                  {nextSprintLabel}
                </span>
              </p>
              <p className="text-[12px] text-text-muted font-body mt-0.5">
                Continuez la formation sur Teams, vous pourrez y acceder ensuite.
              </p>
            </div>
          )}

          {/* No next sprint — final message */}
          {nextSprintLabel === null && (
            <div className="rounded-lg px-4 py-3 text-center bg-success/5 border border-success/20">
              <p className="text-[14px] font-body font-semibold text-success">
                Formation terminee !
              </p>
              <p className="text-[12px] text-text-muted font-body mt-0.5">
                Felicitations, vous avez complete l'ensemble du parcours IA / Copilot Chat.
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-white font-display font-bold text-[15px] hover:opacity-90 active:scale-[0.98] transition-all duration-base shadow-card"
              style={{ backgroundColor: sprintColor }}
            >
              <Home size={16} />
              Retour au tableau de bord
            </button>
            {nextSprintLabel && (
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border font-display font-semibold text-[14px] hover:bg-surface-elevated active:scale-[0.98] transition-all duration-base"
                style={{ borderColor: `${sprintColor}30`, color: sprintColor }}
              >
                Voir ma progression
                <ArrowRight size={15} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
