/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // https://coolors.co/040f0f-248232-2ba84a-2d3a3a-fcfffc
        "rich-black-fogra": "#040F0F",
        "forest-green": "#248232",
        "pantone-green": "#2BA84A",
        "outer-space-crayola": "#2D3A3A",
        "baby-powder": "#FCFFFC",
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        h1: "98px",
        h2: "76px",
        h3: "56px",
        h4: "40px",
        h5: "28px",
        h6: "20px",
        body: "16px",
        "body-small": "14px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
