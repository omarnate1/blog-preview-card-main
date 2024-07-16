/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      borderRadius: {
        "custom-12px": "12px",
      },
      boxShadow: {
        "custom-16": "10px 10px 0px rgba(0, 0, 0, 100)",
      },
      colors: {
        Grey: "#808080",
        Black: "#121212",
        Yellow: "#f4d04e",
      },
    },
  },
  plugins: [],
};
