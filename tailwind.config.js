/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    'index.html',
    'src/js/**/*.js',
    'src/js/*.js',
  ],
  theme: {
    colors: {
      'current': 'currentColor',
      'transparent': 'transparent',
      'white': '#fff',
      'primary': {
        DEFAULT: '#0A5B8A',
        900: '#043873',
        800: '#4F9CF9',
        400: '#A7CEFC',
      },
      'secondary': {
        DEFAULT: '#FFE492',
      },
      'tertiary': {
        DEFAULT: '#212529',
      },
      // 'auxiliary': {
      //   DEFAULT: '#EFF4F7',
      // }
    },
    screens: {
      'mobile': '540px',
      'tablet': '768px',
      'tablet-xl': '992px',
      'laptop': '1024px',
      'desktop': '1300px',
      'l-desktop': '1440px',
      'large': '1680px',
      // => @media (max-width: ..px) { ... }
      "mobile-tablet-xl": { max: "991px" },
      "mobile-tablet": { max: "767px" },
      "mobile-laptop": { max: "1023px" },
      "mobile-l-desktop": { max: "1439px" },
    },
    fontFamily: {
      default: [
        '"Inter"',
        'sans-serif',
      ],
    }, 
    fontSize: {
      'h1m': '42px',
      'h1d': '72px',
      'h2m': '36px',
      'h2d': '64px',
      'h3m': '32px',
      'h3d': '54px',
      'h4m': '24px',
      'h4d': '36px',
      'h5m': '20px',
      'h5d': '28px',
      's': '16px',
      base: '18px',
      'm': '24px',
      'ml': '36px',
    },
    lineHeight: {
      125: '1.25',
    },
    letterSpacing: {
      'sm': '0.02em',
    },
    maxWidth: {
      'none': 'none',
      16: '16px', // 1em
    },
    minWidth: {
      20: '20px',
    },
    minHeight: {
      'screen': '100vh',
    },
    boxShadow: {
      DEFAULT: '0px 10px 20px #0D073629',
    },
    borderRadius: {
      DEFAULT: '4px',
      'full': '100%',
    },
    extend: {
      width: {
        12: '12px',
      },
      height: {
        12: '12px',
      },
      zIndex: {
        '-1': -1,
      },
    }
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'last', 'first'],
      backgroundColor: ['active'],
      fontWeight: ['hover', 'active'],
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const fontSizes = theme("fontSize");
      const sizeKeys = Object.keys(fontSizes);
      const components = {};

      sizeKeys.forEach((minSize) => {
        sizeKeys.forEach((maxSize) => {
          if (minSize !== maxSize) {
            const minFontSize = parseInt(fontSizes[minSize]);
            const maxFontSize = parseInt(fontSizes[maxSize]);
            const minScreen = 375;
            const maxScreen = 1440;
            const corection = (maxScreen - minScreen) / (maxFontSize - minFontSize);

            components[`.text-${minSize}-${maxSize}`] = {
              fontSize: `max(${minFontSize}px, calc(${minFontSize}px + (100vw - ${minScreen}px) / ${corection}))`,
            };
          }
        });
      });

      addComponents(components);
    }),
  ],
}
