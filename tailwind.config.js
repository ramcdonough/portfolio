/** @type {import('tailwindcss').Config} */
const daisyui = require("daisyui");
const colors = require("tailwindcss/colors");

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Include your JavaScript and TypeScript files
        "./public/index.html", // Include your HTML files
    ],
    theme: {
        extend: {
            colors: {
                primary: "#b52c02", // Custom primary color
                // secondary: "#FF8800", // Custom secondary color
                secondary: "#537A5A", //Fern Green
                dark: "#28231C", //Dark greige
                neutral: "#FAF6D1", //Cream
                white: "#ffffff",
            },
        },
    },

    plugins: [daisyui],
};
