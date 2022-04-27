module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        base: "0px 4px 30px rgba(0, 0, 0, 0.1)"
      },
      colors: {
        'beige-pastel': '#F1DDBF',
        'navy-pastel': '#525E75',
        'green-dark-pastel': '#78938A',
        'green-pastel': '#92BA92',
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
  },
  plugins: [],
}
