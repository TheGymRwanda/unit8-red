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
      },
      lineHeight:{
        'tighter':72/64, //1.125
        'tight':64/56, //1.14
        'snug':42/36, //equal to 28:28/24, 1.1666
        'normal': 34/28, //1.214
        'relaxed':32/24, //1.333
        'loose':28/20, //1.4
      },
      letterSpacing:{
        
        tight:'-0.01em', //-1%
        normal:'-0.0125em', //-1.25%
        wide:'-0.015em', //-1.5%
        wider:'-0.02em' //-2%
      },
      maxWidth: {
        "8xl": "82rem"
      }
    }
  },
  plugins: [],
};

