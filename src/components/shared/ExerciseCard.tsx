import { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { HintButton } from './HintButton';
import { StarRating } from './StarRating';
import { SaveIndicator } from './SaveIndicator';
import { showToast } from './Toast';
import type { Exercise, LocalSubmission } from '../../types';

interface ExerciseCardProps {
  exercise: Exercise;
  sprintId: string;
  sprintColor: string;
  initialData?: LocalSubmission | null;
  onSave: (data: {
    sprint: string;
    exercice_id: string;
    prompt_text: string;
    result_text: string;
    self_rating: number | null;
    hints_used: number;
    completed: boolean;
  }) => void;
  onComplete?: () => void;
  showRating?: boolean;
  saving?: boolean;
}

export function ExerciseCard({
  exercise,
  sprintId,
  sprintColor,
  initialData,
  onSave,
  onComplete,
  showRating = true,
  saving,
}: ExerciseCardProps) {
  const [promptText, setPromptText] = useState(initialData?.prompt_text || '');
  const [resultText, setResultText] = useState(initialData?.result_text || '');
  const [selfRating, setSelfRating] = useState<number | null>(initialData?.self_rating ?? null);
  const [hintsUsed, setHintsUsed] = useState(initialData?.hints_used || 0);
  const [completed, setCompleted] = useState(initialData?.completed || false);

  // Stabilize onSave via ref to avoid re-triggering useEffect
  const onSaveRef = useRef(onSave);
  onSaveRef.current = onSave;

  // Auto-save debounced — only user-editable fields in deps
  useEffect(() => {
    if (!promptText && !resultText) return;

    const timeout = setTimeout(() => {
      onSaveRef.current({
        sprint: sprintId,
        exercice_id: exercise.id,
        prompt_text: promptText,
        result_text: resultText,
        self_rating: selfRating,
        hints_used: hintsUsed,
        completed,
      });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [promptText, resultText, selfRating, hintsUsed, completed, sprintId, exercise.id]);

  const handleComplete = () => {
    setCompleted(true);
    onSaveRef.current({
      sprint: sprintId,
      exercice_id: exercise.id,
      prompt_text: promptText,
      result_text: resultText,
      self_rating: selfRating,
      hints_used: hintsUsed,
      completed: true,
    });
    showToast(`${exercise.title} enregistre`);
    onComplete?.();
  };

  const inputClass =
    'w-full rounded-md border border-border-default px-3 py-2.5 text-[14px] font-body text-text-on-light placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-opacity-25 focus:border-opacity-50 transition-all duration-fast resize-y min-h-[100px]';

  return (
    <div
      className={`animate-slide-up bg-surface-card rounded-xl shadow-card transition-all duration-base ${
        completed ? 'ring-1 ring-success/30' : ''
      }`}
    >
      {/* Top color bar */}
      <div className="h-1 rounded-t-xl" style={{ backgroundColor: completed ? '#10B981' : sprintColor }} />

      <div className="p-5 space-y-5">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display font-bold text-[18px] text-text-on-light tracking-tight">
              {exercise.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <SaveIndicator saving={saving} />
            {completed && <CheckCircle2 size={22} className="text-success" />}
          </div>
        </div>

        {/* Enonce — structured with CONSIGNE badge */}
        <div
          className="rounded-lg bg-surface-elevated border-l-[3px] px-4 py-3.5"
          style={{ borderLeftColor: sprintColor }}
        >
          <span
            className="inline-block text-[9px] font-display font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded mb-2 text-white"
            style={{ backgroundColor: sprintColor }}
          >
            Consigne
          </span>
          <p className="text-[14px] text-text-body font-body leading-relaxed">
            {exercise.description}
          </p>
        </div>

        {/* Prompt input */}
        <div>
          <label className="block text-[13px] font-semibold text-text-body tracking-wide mb-1.5" htmlFor={`prompt-${exercise.id}`}>
            Votre prompt
          </label>
          <textarea
            id={`prompt-${exercise.id}`}
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            placeholder="Collez ici le prompt que vous avez saisi dans Copilot Chat..."
            rows={4}
            className={inputClass}
            style={{ '--tw-ring-color': `${sprintColor}40`, '--tw-border-opacity-color': sprintColor } as React.CSSProperties}
            aria-label="Zone de saisie du prompt"
          />
        </div>

        {/* Result input */}
        <div>
          <label className="block text-[13px] font-semibold text-text-body tracking-wide mb-1.5" htmlFor={`result-${exercise.id}`}>
            Resultat obtenu
          </label>
          <textarea
            id={`result-${exercise.id}`}
            value={resultText}
            onChange={(e) => setResultText(e.target.value)}
            placeholder="Collez ici le resultat de Copilot Chat..."
            rows={4}
            className={inputClass}
            style={{ '--tw-ring-color': `${sprintColor}40` } as React.CSSProperties}
            aria-label="Zone de saisie du resultat"
          />
        </div>

        {/* Hints */}
        <HintButton
          hints={exercise.hints}
          unlockedCount={hintsUsed}
          onUnlock={() => setHintsUsed((prev) => prev + 1)}
        />

        {/* Rating + Complete */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-border-subtle">
          {showRating && (
            <StarRating
              value={selfRating}
              onChange={setSelfRating}
              label="Auto-evaluation :"
            />
          )}
          {!completed ? (
            <button
              onClick={handleComplete}
              disabled={!promptText.trim()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-surface-dark text-white text-[14px] font-display font-bold tracking-[0.01em] hover:bg-surface-dark/90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-base ml-auto"
            >
              Valider et continuer
              <ChevronRight size={16} />
            </button>
          ) : (
            <span className="text-[13px] text-success font-semibold ml-auto flex items-center gap-1.5 font-body">
              <CheckCircle2 size={16} />
              Termine
            </span>
          )}
          {!completed && !promptText.trim() && (
            <p className="text-[11px] text-text-muted font-body sm:hidden">
              Saisissez un prompt pour valider
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
