module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(50%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        scaleInCenter: {
          "0%": {
            opacity: "0",
            transform: "scale(0)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        slideRight: "slideRight 1s ease-in-out",
        slideLeft: "slideLeft 1s ease-in-out",
        scaleInCenter: "scaleInCenter 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
