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
      letterSpacing:{
        tight:"-1%" // this a letter spacing -1 percentage
      },
      lineHeight:{
        18:"1.125rem" // this is 18px for line height
      },
      colors:{
        purple:'#5602E0', //this is Purple
        'grey':{
          DEFAULT:'#9A9A9A', //this is dark grey
          50:'#E4E4E4', //this is light grey
          100:'#878787', //this is  grey for the tags text
          200:'#F4F4F4'   // this is tag background color
        }
      },
      spacing:{
        0.6:"0.1875rem" // this is 3px
      },
      borderRadius:{
        md:"1.1875rem"// this is 19px for border radius
      }
    },
  },
  plugins: [],
};
