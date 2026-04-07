type ToastVariant = 'success' | 'warning' | 'error';

let addToastFn: ((text: string, variant?: ToastVariant) => void) | null = null;

export function showToast(text: string, variant: ToastVariant = 'success') {
  addToastFn?.(text, variant);
}

export function _setAddToastFn(fn: typeof addToastFn) {
  addToastFn = fn;
}
