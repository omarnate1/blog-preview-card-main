/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        "custom-12px": "12px",
      },
      boxShadow: {
        "custom-16": "10px 10px 0px rgba(0, 0, 0, 100)",
      },
    },
  },
  plugins: [],
};
