/** @type {import('tailwindcss').Config} */
const daisyui = require("daisyui");
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            colors: {
                primary: "#537A5A", // Fern Green
                // secondary: "#FF8800", // Custom secondary color
                secondary: "#B64624", //Blue
                dark: "#28231C", //Dark greige
                neutral: "#FAF6D1", //Cream
                white: "#ffffff",
            },
            fontSize: {
                xs: "18px",
                sm: "22px",
                base: "28px",
                lg: "32px",
                xl: "40px",
            },
        },
    },

    plugins: [daisyui],
};
