/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        // => @media (min-width: 640px) { ... }

        md: "526px",
        // => @media (min-width: 768px) { ... }

        lg: "768px",
        // => @media (min-width: 1024px) { ... }
        xl: "1020px",
      },
    },
  },
  plugins: [],
};
