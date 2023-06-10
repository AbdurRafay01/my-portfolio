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
      'rose-quartz': '#a39097',
      'icterine': '#ffff75',
      'lavender-pink': '#fcaada',
      'amber': '#ffc000',
      'tomato': '#f45a38',
      'majorelle-blue': '#5b46e1',
      'teal': '#30807d',
      'rich-black': '#071b22',
      'white': '#ffff',
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
