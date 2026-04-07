import { useTranslation } from 'react-i18next';

export function WorkflowSchema() {
  const { t } = useTranslation();

  const steps = [
    { num: '1', label: t('workflow.context'), sub: t('workflow.contextDesc') },
    { num: '2', label: t('workflow.prompt'), sub: t('workflow.promptDesc') },
    { num: '3', label: t('workflow.result'), sub: t('workflow.resultDesc') },
    { num: '4', label: t('workflow.iteration'), sub: t('workflow.iterationDesc') },
  ];

  return (
    <div className="bg-surface-elevated rounded-lg p-4">
      <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-3">
        {t('workflow.title')}
      </p>
      <div className="flex items-center gap-0">
        {steps.map((step, i) => (
          <div key={step.num} className="flex items-center flex-1 min-w-0">
            <div className="flex flex-col items-center text-center flex-1 min-w-0">
              <div className="w-7 h-7 rounded-full bg-surface-dark text-white text-[11px] font-display font-bold flex items-center justify-center mb-1">
                {step.num}
              </div>
              <span className="text-[11px] font-semibold text-text-on-light truncate w-full">
                {step.label}
              </span>
              <span className="text-[10px] text-text-muted truncate w-full">{step.sub}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="w-4 h-[1.5px] bg-border-strong shrink-0 -mx-0.5 mt-[-20px]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
