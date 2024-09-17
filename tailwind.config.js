/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js", // add this line
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#071952",
        secondaryBlue: "#088395",
        thertiaryBlue: "#37B7C3",
        white: "#EBF4F6",
      },
    },
  },
  plugins: [require("flowbite/plugin"), "prettier-plugin-tailwindcss"],
};
