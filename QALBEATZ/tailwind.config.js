/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      body: "Roboto, sans-serif",
    },
    fontWeight: {
      regular: 400,
      bold: 700,
      extrabold: 900,
    },
    extend: {
      colors: {
        brand: "#a2071e",
        "accent-1": "#ff0000",
        "accent-2": "#333333",
      },
    },
  },
  plugins: [],
};
