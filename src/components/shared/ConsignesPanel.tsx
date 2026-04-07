import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { WorkflowSchema } from './WorkflowSchema';

interface ConsignesPanelProps {
  consignes: string[];
  title?: string;
  showWorkflow?: boolean;
}

export function ConsignesPanel({ consignes, title, showWorkflow = true }: ConsignesPanelProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="space-y-3">
      <div className="rounded-xl border-2 border-lecko-blue/20 bg-white overflow-hidden shadow-card">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3.5 text-left bg-lecko-blue/5"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-lecko-blue/10 flex items-center justify-center">
              <BookOpen size={15} className="text-lecko-blue" />
            </div>
            <div>
              <span className="text-[9px] font-display font-bold text-lecko-blue uppercase tracking-[0.15em] block leading-tight">
                {t('consignes.badge')}
              </span>
              <span className="font-display font-bold text-[14px] text-text-on-light">{title || t('consignes.title')}</span>
            </div>
          </div>
          {isOpen ? (
            <ChevronUp size={16} className="text-lecko-blue" />
          ) : (
            <ChevronDown size={16} className="text-lecko-blue" />
          )}
        </button>
        {isOpen && (
          <div className="px-4 pb-4 pt-3 animate-slide-up">
            <ol className="space-y-2.5">
              {consignes.map((c, i) => (
                <li key={i} className="flex gap-3 text-[14px] text-text-body font-body leading-relaxed">
                  <span className="font-display font-bold text-lecko-blue shrink-0 w-6 h-6 rounded-full bg-lecko-blue/8 flex items-center justify-center text-[12px]">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{c}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>

      {showWorkflow && <WorkflowSchema />}
    </div>
  );
}
