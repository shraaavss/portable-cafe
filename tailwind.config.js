/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': 'Leckerli One, cursive',
        'body': 'Ubuntu Mono, monospace',
        'sub-body': 'Courier Prime, monospace',
      },
      colors: {
        'regal-blue': '#243c5a',
        'back-creame': '#DFD7BF',
        'title-brown': '#1A120B',
      },
    },
  },
  plugins: [],
}