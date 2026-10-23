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
        network: {
          bg: '#090d16',
          card: '#0f172a',
          cardBorder: '#1e293b',
          cyan: '#06b6d4',
          cyanGlow: '#22d3ee',
          emerald: '#10b981',
          amber: '#f59e0b',
          rose: '#f43f5e',
          terminal: '#050811'
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'packet-flow': 'flow 2s linear infinite',
      },
      keyframes: {
        flow: {
          '0%': { transform: 'translateX(-100%)', opacity: '0.2' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0.2' },
        }
      }
    },
  },
  plugins: [],
}
