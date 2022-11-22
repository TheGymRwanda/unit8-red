/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: "24.375rem",
      lg: "52.125rem",
    },
    extend: {
      fontFamily:{
         sans:["Neufile Grotesk"] // called it sans for it to act as default
      },
      colors:{
        purple:'#5602E0', //this is Purple
        'grey':{
          DEFAULT:'#9A9A9A', //this is dark grey
          50:'#E4E4E4', //this is light grey
          100:'#878787' //this is  grey for the tags
        }
      }
    },
  },
  plugins: [],
};
