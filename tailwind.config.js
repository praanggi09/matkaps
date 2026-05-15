/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-container": "#2c2c2c",
        "outline": "#ab8a7d",
        "on-error-container": "#ffdad6",
        "primary-container": "#ff5f00",
        "error-container": "#93000a",
        "surface-bright": "#393939",
        "surface": "#131313",
        "outline-variant": "#5b4137",
        "background": "#131313",
        "on-tertiary-fixed-variant": "#474746",
        "on-tertiary": "#313030",
        "on-secondary-fixed-variant": "#544600",
        "on-surface-variant": "#e4bfb1",
        "inverse-on-surface": "#303030",
        "on-secondary-fixed": "#221b00",
        "surface-tint": "#ffb599",
        "primary-fixed-dim": "#ffb599",
        "tertiary-fixed-dim": "#c8c6c5",
        "secondary-fixed-dim": "#e9c400",
        "surface-dim": "#131313",
        "surface-variant": "#353535",
        "on-tertiary-fixed": "#1c1b1b",
        "inverse-surface": "#e4e2e1",
        "primary": "#ffb599",
        "surface-container-highest": "#353535",
        "surface-container-low": "#1b1c1c",
        "primary-fixed": "#ffdbce",
        "secondary-fixed": "#ffe16d",
        "on-secondary": "#3a3000",
        "surface-container": "#1f2020",
        "secondary": "#fff9ef",
        "on-background": "#e4e2e1",
        "on-secondary-container": "#725f00",
        "secondary-container": "#ffdb3c",
        "on-primary-container": "#531a00",
        "surface-container-high": "#2a2a2a",
        "on-surface": "#e4e2e1",
        "on-primary": "#5a1c00",
        "surface-container-lowest": "#0e0e0e",
        "on-primary-fixed": "#370e00",
        "tertiary": "#c8c6c5",
        "error": "#ffb4ab",
        "inverse-primary": "#a63b00",
        "on-primary-fixed-variant": "#7f2b00",
        "tertiary-container": "#959393",
        "on-error": "#690005",
        "tertiary-fixed": "#e5e2e1"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        base: "8px",
        gutter: "24px",
        "margin-mobile": "16px",
        "margin-desktop": "64px",
        "section-gap": "80px"
      },
      fontFamily: {
        "headline-xl": ["Anton"],
        "headline-lg": ["Anton"],
        "body-lg": ["Hanken Grotesk"],
        "headline-lg-mobile": ["Anton"],
        "display-lg": ["Anton"],
        "body-md": ["Hanken Grotesk"],
        "label-sm": ["JetBrains Mono"]
      },
      fontSize: {
        "headline-xl": ["48px", { lineHeight: "1.2", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "1.2", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-lg-mobile": ["28px", { lineHeight: "1.2", fontWeight: "400" }],
        "display-lg": ["72px", { lineHeight: "1.1", letterSpacing: "0.02em", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "1.2", letterSpacing: "0.1em", fontWeight: "700" }]
      }
    }
  },
  plugins: [],
}
