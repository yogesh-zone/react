module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // theme mwans it will overwrite the colors means you can now only access the color and other thing you added
  // in the theme 
  theme: {

    // extend means you can use tailwind default theme and can also put custom own css
    extend: {
      padding:{
        '13':'3.25rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'yblue': '#1fb6ff',
        'ypink': '#ff49db',
        'yorange': '#ff7849',
        'ygreen': '#13ce66',
        'ygray-dark': '#273444',
        'ygray': '#8492a6',
        'ygray-light': '#d3dce6',
        'ytwitter':'#4F48E2',
        'ylblue':'#00AEEF',
      },
      rounded:{
        '50':"50px"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}