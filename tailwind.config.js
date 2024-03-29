/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom:['Inter', 'sans-serif', 'Open Sans', 'sans-serif' ],
        },
        animation: {
          ["infinite-slider"]: "infiniteSlider 20s linear infinite",
        },
        keyframes: {
          infiniteSlider: {
            "0%": { transform: "translateX(0)" },
            "100%": {
              transform: "translateX(calc(-250px * 5))",
            },
          },
        },
        backgroundImage: {
          'parallax': 'url("/CountDown.jpg")',
          'parallax1': 'url("/achivement.jpg")',
          'parallax2': 'url("/FestivalMotto.jpg")'
        }
     },
  plugins: [],
}
};
