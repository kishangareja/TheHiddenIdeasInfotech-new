/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'Primary': "#1173b9ee",
      },
      container: {
        center: true,
        screens: {
          sm: "540px",
          md: "720px",
          lg: "920px",
          xl: "1140px",
          "2xl": "1320px",
          "3xl": "1820px",
        },
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1900px",
      },
      fontFamily: {
        Primary: ["Montserrat", "serif"],
        Secondary: ["Poppins", "serif"],
      },
      keyframes: {
        slideDown: {
          'from': { transform: 'translateY(-100%)', opacity: '0' },
          'to': { transform: 'translateY(0%)', opacity: '1' },
        },
        slide: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-100%)' },
        },
        translateY: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(30px)' },
        },
        pulseOpacity: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.5)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        followParent: {
          '0%': { transform: 'translate(0%, 0%)' },
          '25%': { transform: 'translate(100%, 0%)' },
          '50%': { transform: 'translate(100%, 100%)' },
          '75%': { transform: 'translate(0%, 100%)' },
          '100%': { transform: 'translate(0%, 0%)' },
        },
        moveLeftBounce: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-30px)' },
        },
        appear: {
          '0%': { transform: 'scaleY(1) translateY(0)' },
          '70%': { transform: 'scaleY(0.7) translateY(0)' },
          '80%': { transform: 'scaleY(0.5) translateY(5px)' },
          '100%': { transform: ' scaleY(1) translateY(0)' },
        },
        crose: {
          '0%, 20%, 50%, 80%, 100%': { transform: ' translateY(0px)' },
          '40%': { transform: 'scaleX(0.7) translateY(-30px)' },
          '60%': { transform: ' scaleX(1) translateY(-15px)' },
        },
        screen1: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        screen2: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        screen3: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        zoomInEffect: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        star: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-2000px)' },
        },
      },
      animation: {
        slideDown: 'slideDown 1s ease-in-out',
        translateY: 'translateY 3s linear infinite',
        pulse: 'pulseOpacity 1.2s infinite ease-in-out',
        moveLeftBounce: 'moveLeftBounce 3s infinite linear',
        appear: 'appear 1.5s cubic-bezier(.63,.09,.3,1.43) forwards infinite',
        crose: 'crose 1.5s cubic-bezier(.63,.09,.3,1.43) forwards infinite',
        followParent: 'followParent 12s linear infinite', 
        screen1: 'screen1 3s linear infinite',
        screen2: 'screen2 3s linear infinite',
        screen3: 'screen3 3s ease-in-out infinite',
        zoomIn: 'zoomInEffect 0.5s ease-out forwards',
        star: 'star 50s linear infinite',
      },
      transformOrigin: {
        '50-100': '50% 26%',
      },
      backgroundImage: {
        aboutusImage: "url('/src/assets/AboutUs_bg.jpg')",
        arrorw_1: "url('/src/assets/arrorw_1.svg')",
        THI_banner: "url('/src/assets/THI banner.png')",
        react_banner: "url('/src/assets/reactbanner.png')",
        angular_banner: "url('/src/assets/angularbanner.png')",
        nextjs_banner: "url('/src/assets/next.jsbanner.png')",
        vue_banner: "url('/src/assets/vuebanner.png')",
        laravel_banner: "url('/src/assets/laravel_bg.png')",
        codeIgniter_banner: "url('/src/assets/CodeIgniter_bg.png')",
        cakephp_banner: "url('/src/assets/CakePHP_bg.png')",
        symfony_banner: "url('/src/assets/Symfony_bg.png')",
        flutter_banner: "url('/src/assets/Flutter_bg.png')",
        android_banner: "url('/src/assets/Android_bg.png')",
        ios_banner: "url('/src/assets/Ios_bg.png')",
        mysql_banner: "url('/src/assets/MySql_bg.png')",
        mariaDb_banner: "url('/src/assets/Maria_DB.png')",
        sqLite_banner: "url('/src/assets/SqLite_bg.png')",
        postgresql_banner: "url('/src/assets/Postgresql_bg.png')",
        highlight: "url('/src/assets/highlight.jpg')",
        'custom-gradient': 'linear-gradient(to left, rgba(255, 255, 255, 0), #1173b9ee)',
        'custom-gradient2': 'linear-gradient(to right, rgba(255, 255, 255, 0), #1173b9ee)',
        'custom-gradient3': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0), #1173b9de)',
      },
      boxShadow: {
        custom: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
        customTwo: '0 15px 30px rgba(255, 255, 255, 0.30), 0 10px 10px rgba(255, 255, 255, 0.22)',
        process: ' 0px 5px 15px #1173b942',
        'chooseBox': '0px 0px 20px 0px #1173b942',
        'chooseBox2': '0px 0px 100px  #1173b9ee',
        'testimoialsBox': '0px 0px 20px 0px #1173B9',
        'custom-inset': 'inset 0 0 0 2em #1173b9ee',
      },
    },
  },
  plugins: [],
  corePlugins:{
    preflight:true,
  },
};

