import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#000000', light: '#1c1c1e' },
        accent: { DEFAULT: '#00E676', dark: '#00C853' },
        background: { DEFAULT: '#FFFFFF', dark: '#000000', subtle: '#F8F9FA' },
      },
      fontFamily: { sans: ['var(--font-inter)', 'sans-serif'] },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.04)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: { '2xl': '1.5rem' },
    },
  },
  plugins: [],
}
export default config