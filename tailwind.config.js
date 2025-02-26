/** @type {import('tailwindcss').Config} */
const daisyui = require("daisyui");
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            colors: {
                primary: "#E4DECA", // Cream
                secondary: "#1E1E1E",
                dark: "#1E1E1E", //Dark gray
                neutral: "#1f1f1f", //Cream
                white: "#ffffff",
            },
            fontSize: {
                'xs': ['14px', { lineHeight: '20px' }],
                'sm': ['16px', { lineHeight: '24px' }],
                'base': ['18px', { lineHeight: '28px' }],
                'lg': ['20px', { lineHeight: '30px' }],
                'xl': ['24px', { lineHeight: '32px' }],
                '2xl': ['30px', { lineHeight: '36px' }],
                '3xl': ['36px', { lineHeight: '40px' }],
            },
        },
    },
    plugins: [daisyui],
};
