/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#9376e0',
                secondary: '#e893cf',
                'bike-primary': '#e76f51',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                'eb-garamond': ['EB Garamond', 'serif'],
            },
        },
    },
    plugins: [],
}