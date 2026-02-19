/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
      },
      colors: {
        // EVY GROWTH - Paleta elegante: off-white, charcoal, bronze/dourado
        cream: {
          50: '#FDFCFB',
          100: '#FAF9F7',
          200: '#F5F5F0',
          300: '#EDEBE6',
        },
        charcoal: {
          400: '#6B6560',
          500: '#5A5550',
          600: '#4A4A4A',
          700: '#3D3D3D',
          800: '#2D2D2D',
          900: '#1A1A1A',
        },
        primary: {
          50: '#F7F4F0',
          100: '#EDE8E0',
          200: '#E0D6C8',
          300: '#C9B8A3',
          400: '#B5A48F',
          500: '#A08C75',
          600: '#826E57',
          700: '#6B5A47',
          800: '#554837',
          900: '#3D3428',
        },
        secondary: {
          50: '#F5F3F0',
          100: '#E8E4DE',
          200: '#D4CDC2',
          300: '#B5A48F',
          400: '#9A8B78',
          500: '#826E57',
          600: '#6B5A47',
          700: '#554837',
          800: '#3D3428',
          900: '#2A231C',
        },
        accent: {
          50: '#FBF9F6',
          100: '#F5F0E8',
          200: '#E8DFD2',
          300: '#D4C4B0',
          400: '#B5A48F',
          500: '#9A8B78',
          600: '#826E57',
          700: '#6B5A47',
          800: '#554837',
          900: '#3D3428',
        }
      }
    },
  },
  plugins: [],
}