import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';
import type { SprintDocument } from '../../types';

interface DocumentPanelProps {
  document: SprintDocument;
  color?: string;
}

export function DocumentPanel({ document, color = '#2563EB' }: DocumentPanelProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [copied, setCopied] = useState(false);

  const typeLabels: Record<string, string> = {
    brief: t('document.brief'),
    mail: t('document.mail'),
    rapport: t('document.rapport'),
    note: t('document.note'),
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(document.content);
    } catch {
      const textarea = window.document.createElement('textarea');
      textarea.value = document.content;
      window.document.body.appendChild(textarea);
      textarea.select();
      window.document.execCommand('copy');
      window.document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border-2 border-dashed overflow-hidden shadow-card bg-white" style={{ borderColor: `${color}30` }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
        style={{ backgroundColor: `${color}08` }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center"
            style={{ backgroundColor: `${color}15` }}
          >
            <FileText size={15} style={{ color }} />
          </div>
          <div>
            <span
              className="text-[9px] font-display font-bold uppercase tracking-[0.15em] block leading-tight"
              style={{ color }}
            >
              {typeLabels[document.type] || 'Document'} {t('document.toAnalyze')}
            </span>
            <span className="font-display font-bold text-[14px] text-text-on-light">
              {document.title}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isOpen ? (
            <ChevronUp size={16} style={{ color }} />
          ) : (
            <ChevronDown size={16} style={{ color }} />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pt-3 animate-slide-up">
          <div className="bg-surface-elevated rounded-lg p-4 text-[13px] font-body text-text-body leading-relaxed whitespace-pre-line border border-border-subtle">
            {document.content}
          </div>
          <button
            onClick={handleCopy}
            className="mt-2.5 flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-md border transition-all duration-fast active:scale-[0.98]"
            style={{
              borderColor: `${color}30`,
              color: copied ? '#10B981' : color,
            }}
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? t('document.copiedClipboard') : t('document.copyForCopilot')}
          </button>
        </div>
      )}
    </div>
  );
}
