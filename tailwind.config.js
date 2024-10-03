/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      colors: {
        purple: "#A729F5",
        "dark-navy": "#313E51",
        navy: "#3B4D66",
        "grey-navy": "#626C7F",
        "light-grey": "#ABC1E1",
        "light-bluish": "#F4F6FA",
        green: "#26D782",
        red: "#EE5454",
      },
      fontSize: {
        "heading-small": [
          "1.75rem",
          {
            lineHeight: "100%",
            fontWeight: "500",
          },
        ],
        "heading-medium": [
          "36px",
          {
            lineHeight: "100%",
            fontWeight: "500",
          },
        ],
        "heading-large": [
          "64px",
          {
            lineHeight: "100%",
            fontWeight: "300",
          },
        ],
        display: [
          "144px",
          {
            lineHeight: "100%",
            fontWeight: "500",
          },
        ],
        "body-medium": [
          "12px",
          {
            lineHeight: "150%",
            fontWeight: "400",
          },
        ],
        "body-small": [
          "10px",
          {
            lineHeight: "150%",
            fontWeight: "400",
          },
        ],
      },
      backgroundImage: {
        "bg-desktop": "url('/images/pattern-background-desktop-light.svg')",
        "bg-dark-desktop": "url('/images/pattern-background-desktop-dark.svg')",
        "bg-mobile": "url('/images/pattern-background-mobile.svg')",
        "bg-dark-mobile": "url('/images/pattern-background-mobile-dark.svg')",
        "bg-tablet": "url('/images/pattern-background-tablet.svg')",
        "bg-dark-tablet": "url('/images/pattern-background-tablet-dark.svg')",
      },
      boxShadow: {
        "option-shadow": "0px 16px 40px 0px rgba(143, 160, 193, 0.14)",
        "option-dark-shadow": "0px 16px 40px 0px rgba(49, 62, 81, 0.14)",
      },
    },
  },
  plugins: [],
};

/*
<heading-small:28px></heading-small:28px>
heading-medium: 36px
heading-large: 64px
display:144px
body-medium: 12px line-height:150%
body-small: 10px line-height:150%



*/
