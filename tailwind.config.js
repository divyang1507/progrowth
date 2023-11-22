/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  daisyui: {
    themes: [],
  },

  theme: {
    extend: {
      colors: {
        problack: "#1e1e20",
        prowhite: "#fffff5",
        progray: "#ebebf5",
        probutton: "#646cff",
        propurp: "#bd34fe",
        prodarkred2: "#A64334",
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  // plugins: [require("daisyui")],
};
