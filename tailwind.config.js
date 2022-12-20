/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Neufile Grotesk"], // called it sans for it to act as default
      },
      spacing: {
        0.25: "0.0625rem", //1px
        0.6: "0.1875rem", // this is 3px
        1.75: "0.4375rem", //7px
        2.16: "0.5406rem", // 8.65px
        2.75: "0.6875rem", // 11px
        2.9: "0.725rem", // 11.6px
        3: "0.75rem", // 12px
        3.25:"0.8125rem",//13px
        3.5: "0.875rem", // 14px
        4.25: "1.0625rem", // 17px
        4.48: "1.1213rem", //17.94px
        4.5: "1.125rem", // this is 18px
        4.75: "1.1875rem", //19px
        4.975: "1.2437rem", // 19.9px
        5.1575: "1.2894rem", // 20.63px
        5.3: "1.3256rem", //21.21px
        5.5: "1.375rem", //22px
        6.23: "1.5594rem", //24.91px
        6.5: "1.625rem", // 26px
        6.75: "1.6875rem", // this is 27px
        7.5: "1.875rem", //30px
        8.25: "2.0625rem", // 33px
        9.5: "2.375rem", //38px
        10.25: "2.5625rem", //41px
        10.75: "2.6875rem", // 43px
        14.21: "3.5537rem", //56.86px
        15.01: "3.7544rem", // 60.07px
        15.15: "3.7875rem", // 60.6px
        16.25: "4.0625rem", //65px
        16.69: "4.1744rem", //66px
        17.25: "8.625rem", // this is 138px
        17.76: "4.4425rem", //71.08px
        20.25: "5.0625rem", //81px
        21.25: "5.3125rem", //85px
        21.6575: "5.4144rem", // 86.63px
        22.45: "5.6125rem", //89.8px
        22.87:"5.7188rem",//91.5px
        25.25: "6.3125rem", // 101px
        25.75:"6.4375rem", //103px
        26: "6.5rem", //104px
        26.45: "6.6125rem", //105.8px
        27.79: "6.9481rem", // 111.17px  
        31.75: "7.9375rem", // this is 127px
        32.25: "8.0625rem", //129px,
        33: "8.25rem", //132px
        33.75: "8.4375rem", // this is 135px
        34: "8.5rem", //136px
        35.55: "8.8875rem", //142.2px
        47.75: "11.9375rem", // 191px
        75.5: "18.875rem", //302px
        76.5: "19.125rem", //306px
        78: "19.5rem", //312px
        104.25: "26.0625rem", // 417px
        111: "27.75rem", // 444px
        112: "28rem", //448px
        119.25: "29.8125rem", //477px
        130.245: "32.5613rem", // 520.98px
      },
      minHeight: {
        103.5: "25.875rem", // 414px
      },
      height: {
        0.4 : "0.09375rem", // 1.5px
        111: "27.75rem", // 444px
        214.19: "53.5481rem" // 856.77px
      },
      borderWidth: {
        0.25: "0.0625rem", //1px
        1.5: "0.0938rem", //0.0938rem
      },
      borderRadius: {
        sm: "0.75rem", //this is 12px
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
          400: "#EDEDED", //this is color of blog card border
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
        "3xl": "47.3125rem", // 757px
        "4xl": "50.375rem", // 806px
        "8xl": "82rem", //1312px
      },
      minWidth: {
        sm: "18.875rem", //302px
        md: "28rem", //448px
        lg: "29.8125rem", //477px
      },
      width: {
        64.37: "16.0938rem", //257.5px,
        151.25: "37.8125rem", //605px
        161.5:"40.375rem",  //646px
      },
      fontSize: {
        "3xl": "1.75rem", // this is the size of 28px
        "6xl": "3.25rem", // this is the size of 52px
        "7xl": "5.375rem", // this is the size of 86px
      },
      dropShadow: {
        sm: "1px 1px 14px rgba(0, 0, 0, 0.1)",
        md: "1px 2px 5px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        show: "show 300ms ease-out both",
        unshow: "unshow 300ms ease-out both",
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
    },
  },
  plugins: [],
};
