/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F5',
        surface: '#FFFFFF',
        accent: {
          blue: '#38BDF8',
          deepBlue: '#2563EB',
          terracotta: '#C25E38',
          bronze: '#8C5E3C',
          cream: '#F5EFEB',
        },
        ink: {
          900: '#111827',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1',
          100: '#F1F5F9',
          50: '#F8FAFC',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-hover': '0 14px 40px 0 rgba(31, 38, 135, 0.12)',
        'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.05)',
        'editorial': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
        'artwork': '0 12px 30px -10px rgba(0,0,0,0.12), 0 4px 8px -2px rgba(0,0,0,0.04)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

