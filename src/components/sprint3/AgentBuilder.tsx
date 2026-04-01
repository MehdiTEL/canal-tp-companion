import { useState, useMemo } from 'react';
import { Bot, Sparkles } from 'lucide-react';
import { CopyButton } from '../shared/CopyButton';
import type { AgentConfig } from '../../types';

interface AgentBuilderProps {
  onConfigChange?: (config: AgentConfig) => void;
}

const tonOptions = ['Premium', 'Factuel', 'Creatif', 'Pedagogique'];

export function AgentBuilder({ onConfigChange }: AgentBuilderProps) {
  const [config, setConfig] = useState<AgentConfig>({
    nom: '',
    role: '',
    ton: '',
    instructions: '',
    limites: '',
    prompts_demarrage: ['', '', ''],
  });

  const update = (field: keyof AgentConfig, value: string) => {
    const updated = { ...config, [field]: value };
    setConfig(updated);
    onConfigChange?.(updated);
  };

  const updatePrompt = (index: number, value: string) => {
    const prompts = [...config.prompts_demarrage] as [string, string, string];
    prompts[index] = value;
    const updated = { ...config, prompts_demarrage: prompts };
    setConfig(updated);
    onConfigChange?.(updated);
  };

  const generatedPrompt = useMemo(() => {
    const parts: string[] = [];
    if (config.nom) parts.push(`Tu es ${config.nom}.`);
    if (config.role) parts.push(`Ton role : ${config.role}.`);
    if (config.ton) parts.push(`Ton par defaut : ${config.ton}.`);
    if (config.instructions) parts.push(`\nRegles et instructions :\n${config.instructions}`);
    if (config.limites) parts.push(`\nLimites — tu ne dois jamais :\n${config.limites}`);
    const activePrompts = config.prompts_demarrage.filter(Boolean);
    if (activePrompts.length > 0) {
      parts.push(`\nExemples de demandes que tu peux traiter :\n${activePrompts.map((p, i) => `${i + 1}. ${p}`).join('\n')}`);
    }
    return parts.join('\n') || 'Remplissez les champs pour generer les instructions systeme...';
  }, [config]);

  const isEmpty = !config.nom && !config.role && !config.ton && !config.instructions;

  const fieldClass =
    'w-full rounded-md border border-border-default px-3 py-2.5 text-[14px] font-body text-text-on-light placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-sprint-3/25 focus:border-sprint-3 transition-all duration-fast';

  return (
    <div className="space-y-5">
      {/* Form */}
      <div className="bg-surface-card rounded-xl shadow-card p-5 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-lg bg-sprint-3/10 flex items-center justify-center">
            <Bot size={18} className="text-sprint-3" />
          </div>
          <h3 className="font-display font-bold text-[16px] text-text-on-light tracking-tight">Fiche Agent Builder</h3>
        </div>

        <div>
          <label className="block text-[13px] font-semibold text-text-body tracking-wide mb-1" htmlFor="agent-nom">
            Nom de l'agent
          </label>
          <input id="agent-nom" type="text" value={config.nom} onChange={(e) => update('nom', e.target.value)}
            placeholder="Ex : Assistant Editorial Canal+" className={fieldClass} />
        </div>

        <div>
          <label className="block text-[13px] font-semibold text-text-body tracking-wide mb-1" htmlFor="agent-role">
            Role / mission
          </label>
          <input id="agent-role" type="text" value={config.role} onChange={(e) => update('role', e.target.value)}
            placeholder="Ex : Aider a produire des contenus promotionnels pour Canal+" className={fieldClass} />
          <p className="text-[11px] text-text-muted mt-1">Decrivez en une phrase ce que fait l'agent</p>
        </div>

        <div>
          <label className="block text-[13px] font-semibold text-text-body tracking-wide mb-1" htmlFor="agent-ton">
            Ton par defaut
          </label>
          <select id="agent-ton" value={config.ton} onChange={(e) => update('ton', e.target.value)}
            className={`${fieldClass} appearance-none bg-white`}>
            <option value="">Choisir un ton</option>
            {tonOptions.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-[13px] font-semibold text-text-body tracking-wide mb-1" htmlFor="agent-instructions">
            Instructions systeme
          </label>
          <textarea id="agent-instructions" value={config.instructions} onChange={(e) => update('instructions', e.target.value)}
            placeholder="Comment l'agent doit se comporter..." rows={6} className={`${fieldClass} resize-y`} />
        </div>

        <div>
          <label className="block text-[13px] font-semibold text-text-body tracking-wide mb-1" htmlFor="agent-limites">
            Limites (ce que l'agent ne doit PAS faire)
          </label>
          <textarea id="agent-limites" value={config.limites} onChange={(e) => update('limites', e.target.value)}
            placeholder="Ce que l'agent ne doit jamais faire..." rows={4} className={`${fieldClass} resize-y`} />
        </div>

        <div>
          <label className="block text-[13px] font-semibold text-text-body tracking-wide mb-2">
            Prompts de test (3 questions a poser)
          </label>
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2 mb-2">
              <span className="text-[12px] font-semibold text-text-muted w-4 text-right">{i + 1}.</span>
              <input type="text" value={config.prompts_demarrage[i]} onChange={(e) => updatePrompt(i, e.target.value)}
                placeholder={`Question de test ${i + 1}...`} className={fieldClass}
                aria-label={`Prompt de test ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Generated prompt preview — dark */}
      <div className="bg-surface-dark rounded-xl p-5 space-y-3 shadow-elevated">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-sprint-3" />
            <h3 className="font-display font-bold text-[13px] text-white tracking-tight">
              Instructions systeme generees
            </h3>
          </div>
          {!isEmpty && <CopyButton text={generatedPrompt} label="Copier le prompt" />}
        </div>
        <pre className="text-[13px] text-white/80 whitespace-pre-wrap font-mono leading-relaxed max-h-64 overflow-y-auto">
          {generatedPrompt}
        </pre>
      </div>
    </div>
  );
}
