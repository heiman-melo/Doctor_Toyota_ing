import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        toyotaRed: '#EB0A1E',
        toyotaDarkRed: '#c90819',
        carbon: '#121212',
        carbonLight: '#1A1A1A',
        metallic: '#2A2A2A',
        metallicLight: '#3A3A3A',
      },
    },
  },
  plugins: [],
};

export default config;
