import { useTranslation } from 'react-i18next';
import { FileText, FileSpreadsheet, Download } from 'lucide-react';
import type { DocumentFile } from '../../types';

interface DocumentDownloadProps {
  documents: DocumentFile[];
  color?: string;
}

const ICONS = {
  pdf: FileText,
  xlsx: FileSpreadsheet,
};

const ICON_COLORS = {
  pdf: '#EF4444',
  xlsx: '#22C55E',
};

export function DocumentDownload({ documents, color = '#2563EB' }: DocumentDownloadProps) {
  const { t } = useTranslation();

  if (documents.length === 0) return null;

  return (
    <div className="rounded-xl border-2 border-dashed overflow-hidden" style={{ borderColor: `${color}25` }}>
      <div
        className="flex items-center gap-2 px-4 py-2.5"
        style={{ backgroundColor: `${color}06` }}
      >
        <Download size={14} style={{ color }} />
        <span
          className="text-[11px] font-display font-bold uppercase tracking-[0.12em]"
          style={{ color }}
        >
          {t('documentDownload.title')}
        </span>
      </div>
      <div className="px-4 py-3 space-y-2">
        {documents.map((doc) => {
          const Icon = ICONS[doc.type];
          const iconColor = ICON_COLORS[doc.type];
          const basePath = import.meta.env.BASE_URL || '/';
          const href = `${basePath}${doc.path}`;

          return (
            <a
              key={doc.path}
              href={href}
              download={doc.name}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-border-subtle bg-white hover:bg-surface-elevated hover:border-border-default hover:shadow-card hover:-translate-y-px transition-all duration-base group"
            >
              <div
                className="w-8 h-8 rounded-md flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-base"
                style={{ backgroundColor: `${iconColor}12` }}
              >
                <Icon size={16} style={{ color: iconColor }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-display font-bold text-text-on-light truncate">
                  {doc.name}
                </p>
                <p className="text-[11px] text-text-muted font-body truncate">
                  {doc.description}
                </p>
              </div>
              <div
                className="shrink-0 w-7 h-7 rounded-md flex items-center justify-center opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-base"
                style={{ backgroundColor: `${color}10` }}
              >
                <Download size={13} style={{ color }} />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
