import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066FF',
          dark: '#0052CC',
          light: '#E6F2FF',
        },
        dark: {
          DEFAULT: '#1F2937',
          light: '#374151',
        },
        gray: {
          subtle: '#F9FAFB',
          light: '#F3F4F6',
          DEFAULT: '#9CA3AF',
          medium: '#4B5563',
          dark: '#1F2937',
        },
      },
      maxWidth: {
        container: '1280px',
        'container-sm': '1024px',
        'container-md': '1280px',
        'container-lg': '1536px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
