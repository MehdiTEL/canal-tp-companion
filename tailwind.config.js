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
        'surface-app': '#F8FAFC',
        'surface-card': '#FFFFFF',
        'surface-elevated': '#F1F5F9',
        'surface-dark': '#0F172A',
        /* Text */
        'text-on-light': '#0F172A',
        'text-body': '#334155',
        'text-muted': '#94A3B8',
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
        'border-subtle': '#F1F5F9',
        'border-default': '#E2E8F0',
        'border-strong': '#CBD5E1',
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '14px',
        xl: '20px',
        '2xl': '24px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
        elevated: '0 4px 20px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.03)',
        floating: '0 12px 40px rgba(0,0,0,0.10)',
        'inner-soft': 'inset 0 1px 2px rgba(0,0,0,0.04)',
        glow: '0 0 24px -4px rgba(37, 99, 235, 0.25)',
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
