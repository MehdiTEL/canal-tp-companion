import { useTranslation } from 'react-i18next';

interface SessionFlowProps {
  activeSprintId?: string;
}

export function SessionFlow({ activeSprintId }: SessionFlowProps) {
  const { t } = useTranslation();

  const sprints = [
    { id: 'echauffement', label: t('sessionFlow.echauffement'), sub: t('sessionFlow.echauffementDesc'), time: '10 min', color: '#06B6D4' },
    { id: 'sprint-1', label: t('sessionFlow.sprint1'), sub: t('sessionFlow.sprint1Desc'), time: '25 min', color: '#2563EB' },
    { id: 'sprint-2', label: t('sessionFlow.sprint2'), sub: t('sessionFlow.sprint2Desc'), time: '30 min', color: '#F59E0B' },
    { id: 'sprint-3', label: t('sessionFlow.sprint3'), sub: t('sessionFlow.sprint3Desc'), time: '30 min', color: '#8B5CF6' },
  ];

  return (
    <div className="flex items-center gap-0 w-full overflow-x-auto pb-1">
      {sprints.map((s, i) => {
        const isActive = s.id === activeSprintId;
        return (
          <div key={s.id} className="flex items-center flex-1 min-w-0">
            <div
              className={`flex flex-col items-center text-center px-2 py-2.5 rounded-lg flex-1 min-w-[80px] transition-all duration-base ${
                isActive ? 'bg-surface-app shadow-inner-soft' : ''
              }`}
            >
              <div
                className="w-2.5 h-2.5 rounded-full mb-1.5 ring-2 ring-white"
                style={{ backgroundColor: s.color }}
              />
              <span className="text-[11px] font-display font-bold text-text-on-light truncate w-full">
                {s.label}
              </span>
              <span className="text-[10px] text-text-muted truncate w-full font-body">{s.sub}</span>
              <span className="text-[10px] font-semibold mt-0.5 font-body" style={{ color: s.color }}>{s.time}</span>
            </div>
            {i < sprints.length - 1 && (
              <div className="w-6 h-[2px] bg-border-default shrink-0 -mx-1" />
            )}
          </div>
        );
      })}
    </div>
  );
}
