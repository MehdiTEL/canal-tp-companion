import { Cloud, CloudOff } from 'lucide-react';
import { isSupabaseConfigured } from '../../supabase';

interface SaveIndicatorProps {
  saving?: boolean;
}

export function SaveIndicator({ saving }: SaveIndicatorProps) {
  const isOnline = isSupabaseConfigured();

  return (
    <div className="flex items-center gap-1.5 text-[12px] font-body">
      {saving ? (
        <>
          <div className="w-2 h-2 rounded-full bg-lecko-orange animate-pulse" />
          <span className="text-text-muted">Sauvegarde...</span>
        </>
      ) : isOnline ? (
        <>
          <Cloud size={13} className="text-success" />
          <span className="text-text-muted">Sauvegarde</span>
        </>
      ) : (
        <>
          <CloudOff size={13} className="text-lecko-orange" />
          <span className="text-text-muted">Sauvegarde locale</span>
        </>
      )}
    </div>
  );
}
