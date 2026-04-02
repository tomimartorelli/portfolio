/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta de colores unificada
        primary: {
          DEFAULT: '#6A0DAD',
          soft: '#8B2DD9',
          light: '#A855F7',
          dark: '#4C0A7A',
        },
        background: {
          DEFAULT: 'var(--color-background)',
          dark: 'var(--color-background-dark)',
          card: 'var(--color-background-card)',
          cardHover: 'var(--color-background-card-hover)',
          cardLight: 'var(--color-background-card-light)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          light: 'var(--color-border-light)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
        // Mantener compatibilidad con nombres anteriores
        dark: {
          DEFAULT: 'var(--color-dark)',
          softer: 'var(--color-dark-softer)',
        },
      },
      fontFamily: {
        sans: ['Neue Haas Grotesk Display', 'system-ui', 'sans-serif'],
        body: ['Neue Haas Grotesk Display', 'system-ui', 'sans-serif'],
        heading: ['Neue Haas Grotesk Display', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        normal: '400',
        bold: '700',
        book: '400',
      },
    },
  },
  plugins: [],
}

