/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'display': ['1.5rem', { lineHeight: '2rem' }],
        'title': ['1.125rem', { lineHeight: '1.75rem' }],
        'body-lg': ['1rem', { lineHeight: '1.5rem' }],
        'body': ['0.875rem', { lineHeight: '1.25rem' }],
        'caption': ['0.85rem', { lineHeight: '1rem' }],
      },
    },
  },
  plugins: [],
}
