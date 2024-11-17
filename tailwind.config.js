/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors:{
        'darkBlue' : '#0C1D4B'
      },

      width:{
        'AddButtonWidth' : '229.71px',
        'width716' : '716px'
      },

      height:{
        'customHigh61' : '61px'
      },

      backgroundImage: {
        'background': "url(/src/routes/images/image.png)",
        'editButton' :"url(/src/routes/images/EditIcon.png)"
      }
      
      
    }
  },

  plugins: [require("@tailwindcss/typography")]
};
