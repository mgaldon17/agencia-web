/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Modo día/noche conmutado por la clase `dark` en <html>.
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#050505',
          dark: '#0f172a',
          primary: '#6366f1', // Indigo
          secondary: '#06b6d6', // Cyan
          accent: '#d946ef', // Fuchsia
        },
        // Tokens semánticos enlazados a variables CSS (ver src/styles/main.css).
        // Permiten modificadores de opacidad gracias a <alpha-value>.
        page: 'rgb(var(--c-page) / <alpha-value>)',
        'page-alt': 'rgb(var(--c-page-alt) / <alpha-value>)',
        'ink-strong': 'rgb(var(--c-ink-strong) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        'ink-muted': 'rgb(var(--c-ink-muted) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}