/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: '#020705',
        bgCard: '#0a1510',
        bgCardHover: '#0f1f18',
        neon: '#07CB6C',
        neonDim: '#05a358',
        neonGlow: 'rgba(7,203,108,0.15)',
        neonBorder: 'rgba(7,203,108,0.3)',
        textPrimary: '#e8f5ee',
        textSecondary: '#8fa89a',
        textMuted: '#4a6358',
        borderSubtle: 'rgba(7,203,108,0.1)',
        glassBase: 'rgba(7,203,108,0.04)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Mono', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(7,203,108,0.18) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(7,203,108,0.06) 0%, rgba(7,203,108,0.01) 100%)',
        'neon-gradient': 'linear-gradient(135deg, #07CB6C 0%, #05a358 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, rgba(7,203,108,0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(7,203,108,0.06) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(7,203,108,0.08) 0px, transparent 50%)',
      },
      boxShadow: {
        'neon-sm': '0 0 10px rgba(7,203,108,0.3), 0 0 20px rgba(7,203,108,0.1)',
        'neon-md': '0 0 20px rgba(7,203,108,0.4), 0 0 40px rgba(7,203,108,0.15)',
        'neon-lg': '0 0 30px rgba(7,203,108,0.5), 0 0 60px rgba(7,203,108,0.2)',
        'card': '0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(7,203,108,0.1) inset',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(7,203,108,0.2), 0 0 20px rgba(7,203,108,0.1)',
        'glass': '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'scan-line': 'scanLine 4s linear infinite',
        'grid-flow': 'gridFlow 20s linear infinite',
        'counter': 'counter 2s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'dot-ping': 'dotPing 1.5s ease-in-out infinite',
        'text-reveal': 'textReveal 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'border-flow': 'borderFlow 3s linear infinite',
        'particle': 'particle 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(7,203,108,0.3), 0 0 20px rgba(7,203,108,0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(7,203,108,0.6), 0 0 60px rgba(7,203,108,0.25)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '10%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { transform: 'translateY(100vh)', opacity: 0 },
        },
        gridFlow: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        dotPing: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.4)', opacity: 0.6 },
        },
        textReveal: {
          '0%': { opacity: 0, transform: 'translateY(20px)', filter: 'blur(4px)' },
          '100%': { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        particle: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: 0.4 },
          '33%': { transform: 'translate(30px, -20px) scale(1.1)', opacity: 0.8 },
          '66%': { transform: 'translate(-20px, 10px) scale(0.9)', opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
};