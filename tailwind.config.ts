import type { Config } from 'tailwindcss';
import tailwindScrollbar from 'tailwind-scrollbar';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        dark: 'white',
        // text-slate-200
        darker: 'rgb(226 232 240)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      listStyleType: {
        circle: 'circle',
      },
      'overflow-wrap': {
        break: 'break-word',
      },
      backgroundColor: {
        dark: 'rgb(15 23 42)',
        darker: 'rgb(2 6 23)',
      },
    },
  },
  plugins: [tailwindScrollbar],
};

export default config;
