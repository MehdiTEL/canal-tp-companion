import { useProgress } from '../../hooks/useProgress';

export function ProgressBar() {
  const { sprintProgress, globalProgress } = useProgress();

  const segments = [
    { id: 'echauffement', color: '#06B6D4' },
    { id: 'sprint-1', color: '#2563EB' },
    { id: 'sprint-2', color: '#F59E0B' },
    { id: 'sprint-3', color: '#8B5CF6' },
  ];

  const totalExercises = Object.values(sprintProgress).reduce((s, p) => s + p.total, 0);

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-[11px] text-text-muted font-body">
        <span>Progression globale</span>
        <span className="font-semibold">{Math.round(globalProgress * 100)}%</span>
      </div>
      <div className="flex h-1.5 rounded-full overflow-hidden bg-border-default">
        {segments.map((seg) => {
          const sp = sprintProgress[seg.id];
          if (!sp) return null;
          const segWidth = (sp.total / totalExercises) * 100;
          const fillWidth = sp.total > 0 ? (sp.completed / sp.total) * 100 : 0;
          return (
            <div
              key={seg.id}
              className="relative"
              style={{ width: `${segWidth}%` }}
            >
              <div
                className="absolute inset-0 transition-all duration-slow"
                style={{
                  width: `${fillWidth}%`,
                  backgroundColor: seg.color,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
