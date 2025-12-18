/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [ "./components/**/*.{js,jsx,ts,tsx}",  "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "sf-pro-regular" : ['SF-Pro-Regular'],
        "sf-pro-medium" : ['SF-Pro-Medium']
      },

       colors: {
        "base": "#0F73F7",
        "secondary": "#FDFDFD",
        "gray": "#A2A2A2",

        black: "#111111",
        "dark-gray": "#7A7A7A",
        "soft-gray": "#E3E6F0",
        "light-gray": "#EBEBEB",
        "gray-dark": "#4D4D4D",

        // status
        "light-yellow":"#FFF7D6",
        "orange": "#F3934F",
        "light-orange": "#FCE8D9",
        "red": "#F34F4F",
        "light-red": "#FFF0EE",
        "green": "#008364",
        "light-green": "#E4F6E8",
        "yellow": "#F1C400",

        // blue
        "blue-100": "#CFE3FD",
        "blue-200": "#9FC7FC",
        "blue-300": "#6FABFA",
        "blue-400": "#3F8FF9",
        "blue-500": "#0F73F7",
        "blue-600": "#0C5CC6",
        "blue-700": "#094594",
        "blue-800": "#062E63",
        "blue-900": "#031731",
       }
    },
  },
  plugins: [],
}