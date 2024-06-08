/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'roboto':['Roboto','sans-serif'],
      },
      colors: {
        header: "hsl(var(--header))",
        "header-foreground": "hsl(var(--header-foreground))",
      },
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
};
