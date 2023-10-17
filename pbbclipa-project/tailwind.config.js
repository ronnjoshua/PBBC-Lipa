/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      keyframes: {
        slideToLeft: {
          '0%'   :{ transform: 'translateX(400px)' },
          '25%'  :{ transform: 'translateX(300px)' },
          '50%'  :{ transform: 'translateX(200px)' },
          '75%'  :{ transform: 'translateX(100px)' },
          '100%' :{ transform: 'translateX(0px)' },
      },
      slideToRight: {
        '0%'   :{ transform: 'translateX(0px)' },
        '25%'  :{ transform: 'translateX(100px)' },
        '50%'  :{ transform: 'translateX(200px)' },
        '75%'  :{ transform: 'translateX(300px)' },
        '100%' :{ transform: 'translateX(400px)' },
    },
        spinMenuIcon: {
            '0%'  :{ transform: 'rotate(0deg)' },
            '10%' :{ transform: 'rotate(40deg)' },
            '20%' :{ transform: 'rotate(90deg)' },
            '30%' :{ transform: 'rotate(140deg)' },
            '40%' :{ transform: 'rotate(200deg)' },
            '50%' :{ transform: 'rotate(270deg)' },
            '60%' :{ transform: 'rotate(315deg)' },
            '100%':{ transform: 'rotate(360deg)' },
        },
        spinMenuIcon2: {
          '0%'  :{ transform: 'rotate(0deg)' },
          '10%' :{ transform: 'rotate(40deg)' },
          '20%' :{ transform: 'rotate(90deg)' },
          '30%' :{ transform: 'rotate(140deg)' },
          '40%' :{ transform: 'rotate(200deg)' },
          '50%' :{ transform: 'rotate(270deg)' },
          '60%' :{ transform: 'rotate(315deg)' },
          '100%':{ transform: 'rotate(360deg)' },
      },
      },
      animation:{
        slideToRight: 'slideToRight 0.7s ease-in-out',
        slideToLeft: 'slideToLeft 0.7s ease-in-out',
        spinMenuIcon: 'spinMenuIcon 0.7s linear',
        spinMenuIcon2: 'spinMenuIcon2 0.7s linear',
      },
     
    },
  },
  
  plugins: [],
}

