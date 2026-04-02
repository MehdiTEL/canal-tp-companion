/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ["'DM Sans'", "'Source Sans 3'", 'system-ui', 'sans-serif'],
        body: ["'Source Sans 3'", 'system-ui', 'sans-serif'],
        sans: ["'Source Sans 3'", 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        /* Surfaces */
        'surface-app': '#FAFBFE',
        'surface-card': '#FFFFFF',
        'surface-elevated': '#F0F3FA',
        'surface-dark': '#111827',
        /* Text */
        'text-on-light': '#111827',
        'text-body': '#374151',
        'text-muted': '#9CA3AF',
        'text-on-dark': '#FFFFFF',
        /* Brands */
        'lecko-blue': '#2563EB',
        'lecko-orange': '#F59E0B',
        'canal-black': '#000000',
        /* Sprint colors */
        'sprint-warmup': '#06B6D4',
        'sprint-1': '#2563EB',
        'sprint-2': '#F59E0B',
        'sprint-3': '#8B5CF6',
        /* States */
        success: '#10B981',
        'success-bg': '#ECFDF5',
        warning: '#F59E0B',
        'warning-bg': '#FFFBEB',
        info: '#3B82F6',
        'info-bg': '#EFF6FF',
        'hint-locked': '#E5E7EB',
        'hint-unlocked': '#FEF3C7',
        'hint-border': '#F59E0B',
        /* Borders */
        'border-subtle': '#F3F4F6',
        'border-default': '#E5E7EB',
        'border-strong': '#D1D5DB',
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
        xl: '20px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
        elevated: '0 4px 16px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)',
        floating: '0 12px 40px rgba(0,0,0,0.12)',
        'inner-soft': 'inset 0 1px 2px rgba(0,0,0,0.04)',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '400ms',
      },
    },
  },
  plugins: [],
}
