const steps = [
  { num: '1', label: 'Contexte', sub: 'Definir le besoin' },
  { num: '2', label: 'Prompt', sub: 'Rediger le prompt' },
  { num: '3', label: 'Resultat', sub: 'Analyser la sortie' },
  { num: '4', label: 'Iteration', sub: 'Affiner le prompt' },
];

export function WorkflowSchema() {
  return (
    <div className="bg-surface-elevated rounded-lg p-4">
      <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-3">
        Boucle de prompting
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
