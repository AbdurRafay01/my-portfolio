/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      /* CSS HEX */
      'gray-100': '#f7fafc',
      'gray-200': '#edf2f7',
      'gray-300': '#e2e8f0',
      'gray-400': '#cbd5e0',
      'gray-500': '#a0aec0',
      'gray-600': '#718096',
      'gray-sixh': '#718096',
      'gray-700': '#4a5568',
      'gray-800': '#2d3748',
      'gray-end': '#1a202c',
      'rose-quartz': '#a39097',
      'icterine': '#ffff75',
      'lavender-pink': '#fcaada',
      'amber': '#ffc000',
      'tomato': '#f45a38',
      'majorelle-blue': '#5b46e1',
      'teal': '#30807d',
      'rich-black': '#071b22',
      'white': '#ffff',
      'cornsilk': '#fefae0',
      'earth-yellow': '#dda15e'
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
