/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "flap-down-top": "flapDownTop 300ms ease-in forwards",
        "flap-down-bottom": "flapDownBottom 300ms ease-out forwards",
      },
      transformOrigin: {
        center: "center",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".clip-path-top": {
          "clip-path": "polygon(0 50%, 100% 50%, 100% 0, 0 0)",
        },
        ".clip-path-bottom": {
          "clip-path": "polygon(0 100%, 100% 100%, 100% 50%, 0 50%)",
        },
        ".rotate-x-50": {
          transform: "rotateX(50deg)",
        },
        ".fill-mode-forwards": {
          "animation-fill-mode": "forwards",
        },
        ".transform-gpu": {
          transform: "translateZ(0)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
