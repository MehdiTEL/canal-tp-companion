import { useEffect, useState, useCallback } from 'react';
import { CheckCircle2, AlertTriangle, XCircle, X } from 'lucide-react';
import { _setAddToastFn } from './showToast';

type ToastVariant = 'success' | 'warning' | 'error';

interface ToastMessage {
  id: string;
  text: string;
  variant: ToastVariant;
}

const DURATIONS: Record<ToastVariant, number> = {
  success: 2500,
  warning: 4000,
  error: 5000,
};

const ICONS: Record<ToastVariant, typeof CheckCircle2> = {
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
};

const ICON_COLORS: Record<ToastVariant, string> = {
  success: 'text-success',
  warning: 'text-yellow-400',
  error: 'text-red-400',
};

export function ToastContainer() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((text: string, variant: ToastVariant = 'success') => {
    let id: string;
    try {
      id = crypto.randomUUID();
    } catch {
      id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    }
    setToasts((prev) => [...prev, { id, text, variant }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, DURATIONS[variant]);
  }, []);

  useEffect(() => {
    _setAddToastFn(addToast);
    return () => { _setAddToastFn(null); };
  }, [addToast]);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-20 lg:bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2">
      {toasts.map((toast) => {
        const Icon = ICONS[toast.variant];
        return (
          <div
            key={toast.id}
            className="animate-toast-in flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-dark text-white text-sm font-body shadow-floating"
          >
            <Icon size={16} className={`${ICON_COLORS[toast.variant]} shrink-0`} />
            <span>{toast.text}</span>
            <button
              onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
              className="ml-2 p-0.5 rounded hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
