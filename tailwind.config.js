/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'rust-red': '#CF4934',
        primary: '#79633A',
        green: '#9CCC65',
        'border-b-50': 'rgba(255, 255, 255, 0.33)',
        'dark-50': 'rgba(255, 255, 255, 0.53',
        'dark-900': 'rgba(26, 27, 32, 0.85)',
        'dark-70': 'rgba(255, 255, 255, 0.3)',
        'light-dark': 'rgba(0, 0, 0, 0.3)',
        'gray-800': 'rgba(255, 255, 255, 0.53)',
      },
      fontSize: {
        '5xl': [
          '40px',
          {
            lineHeight: '2.25rem',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
      },
    },
  },
  plugins: [],
});
