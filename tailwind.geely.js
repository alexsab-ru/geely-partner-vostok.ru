import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
const plugin = require('tailwindcss/plugin')

export const content = ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}']
export const theme = {
  container: {
    center: true,
    padding: '1.25rem',
  },
  extend: {
    fontFamily: {
      'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
    },
    boxShadow: {
      '3xl': '0 35px 60px rgba(0, 0, 0, 0.3)',
    },
    colors: {
      'sand-silver': '#E2E2E2',
      'lunar-maria-gray': '#A3B0BA',
      'space-gray': '#313E48',
      'purple': '#7D5EA8',
      'orange': '#F48026',
      red: {
        500: '#DF202A',
      },
      yellow: {
        500: '#FECA57',
      },
      blue: {
        300: '#77C8F0',
        400: '#5A9AD3',
        500: '#3D91CE',
      },
      'dark-blue': {
        400: '#343759',
        500: '#222951',
      },
      accent: { // в основном в верстке используется 400 и 500
        400: '#3150A2',
        500: '#1D449B',
      },
      vk: '#4B76A8',
      ok: '#F7931D',
      fb: '#3C5A99',
      youtube: '#FF0018',
      tiktok: '#000000',
      telegram: '#2FACE1',
    },
    screens: {
      'xs': {'max': '430px'},
      's1024_1074': {'min': '1024px', 'max': '1074px'},
      's1280_1330': {'min': '1280px', 'max': '1330px'},
      's1536_1586': {'min': '1536px', 'max': '1586px'},
    },
  },
}
export const plugins = [
	plugin(function({ matchUtilities, theme }) {
		matchUtilities({ fz: (value) => ({ fontSize: `clamp(1rem, calc(calc(1vw + 1vh) * ${value}), 3rem)` })});
		matchUtilities({ ptop: (value) => ({ paddingTop: `clamp(1rem, calc(calc(1vw + 1vh) * ${value}), 3rem)` })});
		matchUtilities({ pbottom: (value) => ({ paddingBottom: `clamp(1rem, calc(calc(1vw + 1vh) * ${value}), 3rem)` })});
		matchUtilities({ plr: (value) => ({ paddingLeft: `clamp(1rem, calc(calc(1vw + 1vh) * ${value}), 3rem)`, paddingRight: `clamp(1rem, calc(calc(1vw + 1vh) * ${value}), 3rem)` })});
		matchUtilities({ t: (value) => ({ top: `clamp(1rem, calc(calc(1vw + 1vh) * ${value}), 3rem)`})});
		matchUtilities({ r: (value) => ({ right: `clamp(1rem, calc(calc(1vw + 1vh) * ${value}), 3rem)`})});
		matchUtilities({ b: (value) => ({ bottom: `clamp(1rem, calc(calc(1vw + 1vh) * ${value}), 3rem)`})});
		matchUtilities({ l: (value) => ({ left: `clamp(1rem, calc(calc(1vw + 1vh) * ${value}), 3rem)`})});
	})
]

