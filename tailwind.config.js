/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "24.375rem",
        md: "52.125rem",
        xl: "90rem",
      },
      fontFamily: {
        sans: ["Neufile Grotesk"], // called it sans for it to act as default
      },
      spacing: {
        0.6: "0.1875rem", // this is 3px
        2.75: "0.6875rem", // 11px
        3.5: "0.875rem", // 14px
        111: "27.75rem", // 444px
        17.76: "4.4425rem", //71.08px
        10.25: "2.5625rem", //41px
        10.75: "2.6875rem", // 43px
        7.5: "1.875rem", //30px
        17.25: "8.625rem", // this is 138px
        31.75: "7.9375rem", // this is 127px
        33.75: "8.4375rem", // this is 135px
        4.5: "1.125rem", // this is 18px
        6.75: "1.6875rem", // this is 27px
        25.25: "6.3125rem", // 101px
        5.3: "1.3256rem", //21.21px
        4.48: "1.1213rem", //17.94px
        8.25: "2.0625rem", // 33px
        16.69: "4.1744rem", //66px
        26: "6.5rem", //104px
        34: "8.5rem", //136px
        21.25: "5.3125rem", //85px
        20.25: "5.0625rem", //81px
        1.75: "0.4375rem", //7px
        6.23: "1.5594rem", //24.91px
        26.45: "6.6125rem", //105.8px
        33: "8.25rem", //132px
        22.45: "5.6125rem", //89.8px
        35.55: "8.8875rem", //142.2px
        32.25: "8.0625rem", //129px,
        16.25: "4.0625rem", //65px
        78: "19.5rem", //312px
        76.5: "19.125rem", //306px
      },
      minHeight: {
        103.5: "25.875rem", // 414px
      },
      height: {
        111: "27.75rem", // 444px
      },
      borderWidth: {
        1.5: "0.0938rem", //1.5px
      },
      borderRadius: {
        md: "1.1875rem", // this is 19px for border radius
      },
      colors: {
        purple: "#5602E0", //this is Purple
        grey: {
          DEFAULT: "#9A9A9A", //this is dark grey
          50: "#E4E4E4", //this is light grey
          100: "#878787", //this is  grey for the tags
          200: "#F4F4F4", // this is tag background color
          300: "#E2E2E2", // this is color of border
        },
      },
      lineHeight: {
        // overwritten line-height value using ratios
        tighter: 72 / 64, //1.125
        tight: 64 / 56, //1.14
        snug: 42 / 36, // the ratio 42/36 equals to 28/24, 1.1666
        normal: 34 / 28, //1.214
        relaxed: 32 / 24, //1.333
        loose: 28 / 20, //1.4
      },
      letterSpacing: {
        tight: "-0.01em", //-1%
        normal: "-0.0125em", //-1.25%
        wide: "-0.015em", //-1.5%
        wider: "-0.02em", //-2%
      },
      maxWidth: {
        "8xl": "82rem", //1312px
        "4xl": "50.375rem", // 806px
        "3xl": "47.3125rem", // 757px
      },
      width: {
        64.37: "16.0938rem", //257.5px,
        151.25: "37.8125rem", //605px
      },
      fontSize: {
        "6xl": "3.5rem", // this is the size of 56px
        "7xl": "4rem", // this is the size of 64px
        "3xl": "1.75rem", // this is the size of 28px
      },
      dropShadow: {
        sm: "1px 1px 14px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        show: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        unshow: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        show: "show 300ms ease-out both",
        unshow: "unshow 300ms ease-out both",
      },
    },
  },
  plugins: [],
};
