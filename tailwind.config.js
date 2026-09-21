/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
        },
        electric: {
          violet: '#8b5cf6',
          purple: '#a855f7',
          indigo: '#6366f1',
          pink: '#ec4899',
          blue: '#3b82f6',
        },
        dark: {
          base: '#080c14',
          card: 'rgba(15, 23, 42, 0.65)',
          surface: '#0f172a',
          elevated: '#1e293b',
          border: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(6, 182, 212, 0.15)',
        },
        light: {
          base: '#f8fafc',
          card: 'rgba(255, 255, 255, 0.85)',
          surface: '#ffffff',
          elevated: '#f1f5f9',
          border: 'rgba(0, 0, 0, 0.08)',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.35)',
        'glow-violet': '0 0 25px -5px rgba(139, 92, 246, 0.35)',
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
