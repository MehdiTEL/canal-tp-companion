import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, ChevronRight, Eye, Copy, Check } from 'lucide-react';
import { HintButton } from './HintButton';
import { DocumentDownload } from './DocumentDownload';
import { StarRating } from './StarRating';
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
}

export function ExerciseCard({
  exercise,
  sprintId,
  sprintColor,
  initialData,
  onSave,
  onComplete,
  showRating = true,
}: ExerciseCardProps) {
  const { t } = useTranslation();
  const [selfRating, setSelfRating] = useState<number | null>(initialData?.self_rating ?? null);
  const [hintsUsed, setHintsUsed] = useState(initialData?.hints_used || 0);
  const [completed, setCompleted] = useState(initialData?.completed || false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedResult, setCopiedResult] = useState(false);

  const onSaveRef = useRef(onSave);
  onSaveRef.current = onSave;

  const handleComplete = () => {
    setCompleted(true);
    onSaveRef.current({
      sprint: sprintId,
      exercice_id: exercise.id,
      prompt_text: '',
      result_text: '',
      self_rating: selfRating,
      hints_used: hintsUsed,
      completed: true,
    });
    showToast(`${exercise.title} — ${t('exercise.completed')}`);
    onComplete?.();
  };

  const handleCopy = async (text: string, type: 'prompt' | 'result') => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    if (type === 'prompt') {
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2000);
    } else {
      setCopiedResult(true);
      setTimeout(() => setCopiedResult(false), 2000);
    }
  };

  const hasAnswer = exercise.idealPrompt || exercise.idealResult;

  return (
    <div
      className={`animate-slide-up bg-white rounded-2xl shadow-card border transition-all duration-base ${
        completed ? 'border-success/30 shadow-[0_0_0_1px_rgba(16,185,129,0.08)]' : 'border-border-default'
      }`}
    >
      {/* Top color bar */}
      <div
        className="h-1.5 rounded-t-2xl transition-colors duration-base"
        style={{ backgroundColor: completed ? '#10B981' : sprintColor }}
      />

      <div className="p-5 sm:p-6 space-y-5">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-bold text-[18px] text-text-on-light tracking-tight leading-snug">
            {exercise.title}
          </h3>
          {completed && (
            <div className="shrink-0 animate-fade-in">
              <CheckCircle2 size={22} className="text-success" />
            </div>
          )}
        </div>

        {/* Consigne */}
        <div
          className="rounded-xl bg-surface-elevated/80 border-l-[3px] px-4 py-4"
          style={{ borderLeftColor: sprintColor }}
        >
          <span
            className="inline-block text-[10px] font-display font-bold uppercase tracking-[0.15em] px-2.5 py-0.5 rounded-md mb-2.5 text-white"
            style={{ backgroundColor: sprintColor }}
          >
            {t('exercise.consigne')}
          </span>
          <p className="text-[14px] text-text-body font-body leading-relaxed">
            {exercise.description}
          </p>
        </div>

        {/* Documents */}
        {exercise.documents && exercise.documents.length > 0 && (
          <DocumentDownload documents={exercise.documents} color={sprintColor} />
        )}

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
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-lecko-blue text-white text-[14px] font-display font-bold tracking-[0.01em] hover:bg-lecko-blue/90 active:scale-[0.97] transition-all duration-base ml-auto shadow-elevated"
            >
              {t('exercise.complete')}
              <ChevronRight size={16} />
            </button>
          ) : (
            <span className="text-[13px] text-success font-semibold ml-auto flex items-center gap-1.5 font-body">
              <CheckCircle2 size={16} />
              {t('exercise.completed')}
            </span>
          )}
        </div>

        {/* Discover the answer — unlockable after completion */}
        {completed && hasAnswer && (
          <div className="pt-2">
            {!showAnswer ? (
              <button
                onClick={() => setShowAnswer(true)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border-2 border-dashed transition-all duration-base active:scale-[0.98] hover:bg-surface-elevated/50"
                style={{ borderColor: `${sprintColor}35`, color: sprintColor }}
              >
                <Eye size={18} />
                <span className="font-display font-bold text-[14px]">{t('exercise.discoverAnswer')}</span>
              </button>
            ) : (
              <div className="space-y-4 animate-slide-up">
                <div className="flex items-center gap-2 mb-1">
                  <Eye size={16} style={{ color: sprintColor }} />
                  <span className="text-[13px] font-display font-bold uppercase tracking-wider" style={{ color: sprintColor }}>
                    {t('exercise.expectedAnswer')}
                  </span>
                </div>

                {/* Ideal prompt */}
                {exercise.idealPrompt && (
                  <div className="rounded-xl border overflow-hidden" style={{ borderColor: `${sprintColor}20` }}>
                    <div className="flex items-center justify-between px-4 py-2.5" style={{ backgroundColor: `${sprintColor}06` }}>
                      <span className="text-[11px] font-display font-bold uppercase tracking-wider" style={{ color: sprintColor }}>
                        {t('exercise.idealPrompt')}
                      </span>
                      <button
                        onClick={() => handleCopy(exercise.idealPrompt!, 'prompt')}
                        className="flex items-center gap-1 text-[11px] font-body px-2.5 py-1 rounded-md transition-colors hover:bg-white/60"
                        style={{ color: copiedPrompt ? '#10B981' : sprintColor }}
                      >
                        {copiedPrompt ? <Check size={12} /> : <Copy size={12} />}
                        {copiedPrompt ? t('exercise.copied') : t('exercise.copy')}
                      </button>
                    </div>
                    <div className="px-4 py-3.5 bg-surface-app">
                      <p className="text-[13px] font-mono text-text-body leading-relaxed whitespace-pre-wrap">
                        {exercise.idealPrompt}
                      </p>
                    </div>
                  </div>
                )}

                {/* Ideal result */}
                {exercise.idealResult && (
                  <div className="rounded-xl border overflow-hidden" style={{ borderColor: `${sprintColor}20` }}>
                    <div className="flex items-center justify-between px-4 py-2.5" style={{ backgroundColor: `${sprintColor}06` }}>
                      <span className="text-[11px] font-display font-bold uppercase tracking-wider" style={{ color: sprintColor }}>
                        {t('exercise.expectedResult')}
                      </span>
                      <button
                        onClick={() => handleCopy(exercise.idealResult!, 'result')}
                        className="flex items-center gap-1 text-[11px] font-body px-2.5 py-1 rounded-md transition-colors hover:bg-white/60"
                        style={{ color: copiedResult ? '#10B981' : sprintColor }}
                      >
                        {copiedResult ? <Check size={12} /> : <Copy size={12} />}
                        {copiedResult ? t('exercise.copied') : t('exercise.copy')}
                      </button>
                    </div>
                    <div className="px-4 py-3.5 bg-white">
                      <p className="text-[13px] font-body text-text-body leading-relaxed whitespace-pre-wrap">
                        {exercise.idealResult}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
