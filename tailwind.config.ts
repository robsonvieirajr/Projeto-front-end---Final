import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        white: {
          50: '#f6f8ff',
          100: '#ebf5ff',
          200: '#dce7ff',
          300: '#ced4f9',
          400: '#bfc2f6',
          500: '#b1aeef',
          600: '#9ea6e5',
          700: '#8ba0da',
          800: '#7993cc',
          900: '#6786c4'
        },
        green: {
          'rm-300': '#00b37e',
          'rm-500': '#00875f'
        }
      },
      boxShadow: {
        rm: 'inset 0 0 20px #00b37e',
        img: '-4px -4px 1px 5px rgba(0,135,95,0.5)'
      }
    }
  },
  plugins: []
}
export default config
