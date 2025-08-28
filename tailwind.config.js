/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'greia-warm-start': '#FF8934',
        'greia-warm-end': '#FF176B',
        'greia-cold-start': '#3360ED',
        'greia-cold-end': '#0BD3A4',
      },
      fontFamily: {
        'greia-poster': ['GREIA Poster', 'Nunito', 'system-ui', 'sans-serif'],
        'greia-body': ['Inter', 'Roboto', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'panel': '20px',
        'button': '12px',
      },
      boxShadow: {
        'card': '0 8px 20px rgba(0,0,0,0.06)',
        'elev': '0 16px 40px rgba(0,0,0,0.08)',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '24px',
        '6': '32px',
        '7': '48px',
      },
    },
  },
  plugins: [],
}