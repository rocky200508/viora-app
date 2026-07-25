/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sky: {
          DEFAULT: '#2FA8E0',
          light: '#5FC3F0',
        },
        violet: {
          DEFAULT: '#7C3AED',
          deep: '#5B21B6',
        },
        bloom: '#E0368C',
        leaf: '#34C759',
        indigo: {
          ink: '#2B1B4D',
        },
        canvas: '#FAFAFB',
      },
      fontFamily: {
        display: ['"Baloo 2"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'viora-gradient': 'linear-gradient(135deg, #2FA8E0 0%, #7C3AED 100%)',
        'viora-warm': 'linear-gradient(135deg, #E0368C 0%, #7C3AED 100%)',
      },
    },
  },
  plugins: [],
}
