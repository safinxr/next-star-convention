/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "first-color":"#19CFFC",
        "second-color": "#12ECD3",
        "third-color": "#00DFEF"
      },
      backgroundColor: {
        'active': "#00DFEF"
      },
    },
  },
  plugins: [require("daisyui")],
}

