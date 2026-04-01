import { Lightbulb, ChevronDown } from 'lucide-react';
import type { Hint } from '../../types';

interface HintButtonProps {
  hints: Hint[];
  unlockedCount: number;
  onUnlock: () => void;
}

export function HintButton({ hints, unlockedCount, onUnlock }: HintButtonProps) {
  if (hints.length === 0) return null;

  const hasMore = unlockedCount < hints.length;
  const visibleHints = hints.slice(0, unlockedCount);

  return (
    <div className="space-y-2.5">
      {/* Already revealed hints */}
      {visibleHints.map((hint, i) => (
        <div
          key={hint.id}
          className="animate-expand rounded-lg border border-amber-200 bg-amber-50 p-4 flex gap-3"
        >
          <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
            <Lightbulb size={15} className="text-amber-500" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[11px] font-semibold text-amber-600 uppercase tracking-wider">
              Astuce {visibleHints.length > 1 ? i + 1 : ''}
            </span>
            <p className="text-[14px] text-text-body mt-1 font-body leading-relaxed animate-fade-in" style={{ animationDelay: '150ms', animationFillMode: 'backwards' }}>
              {hint.text}
            </p>
          </div>
        </div>
      ))}

      {/* Button to reveal next hint — always welcoming, no counting */}
      {hasMore && (
        <button
          onClick={onUnlock}
          className="group flex items-center gap-2.5 w-full px-4 py-3.5 rounded-lg border border-amber-200/70 bg-amber-50/50 hover:bg-amber-50 hover:border-amber-300 transition-all duration-base"
        >
          <div className="w-7 h-7 rounded-full bg-amber-100 group-hover:bg-amber-200 flex items-center justify-center shrink-0 transition-colors">
            <Lightbulb size={15} className="text-amber-500" />
          </div>
          <span className="text-[14px] text-amber-700 font-body font-medium">
            {unlockedCount === 0 ? 'Voir une astuce pour vous aider' : 'Voir une autre astuce'}
          </span>
          <ChevronDown size={16} className="text-amber-400 ml-auto group-hover:translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* All hints revealed — encouragement */}
      {!hasMore && unlockedCount > 0 && (
        <p className="text-[12px] text-amber-600/70 font-body pl-1 mt-1">
          Vous avez toutes les astuces pour cet exercice. A vous de jouer !
        </p>
      )}
    </div>
  );
}
