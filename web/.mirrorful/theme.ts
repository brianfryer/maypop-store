
  export type Colors = keyof typeof Tokens.colors
  export type FontSize = keyof typeof Tokens.fontSizes
  export type Shadows = keyof typeof Tokens.boxShadows

  export type Token = Colors | FontSize | Shadows

  export const Tokens = {
  colors: {
    leaf: {
      '50': '#FCFCFC',
      '100': '#EFF2F0',
      '200': '#D7DDD6',
      '300': '#BEC8BE',
      '400': '#A6B3A5',
      '500': '#8F9E8C',
      '600': '#788973',
      '700': '#63705E',
      '800': '#444C40',
      '900': '#242821',
      '950': '#141612',
      base: '#63705E',
    },
    storm: {
      '50': '#EBEFEF',
      '100': '#DDE3E4',
      '200': '#C1CCCD',
      '300': '#A4B5B6',
      '400': '#889EA0',
      '500': '#6D8688',
      '600': '#566A6C',
      '700': '#404E4F',
      '800': '#293233',
      '900': '#121617',
      '950': '#0A0D0D',
      base: '#121617',
    },
    sun: {
      '50': '#F9EFDC',
      '100': '#F5E6CB',
      '200': '#EFD4A9',
      '300': '#E8C286',
      '400': '#E2AE64',
      '500': '#D99235',
      '600': '#B47222',
      '700': '#855219',
      '800': '#563410',
      '900': '#261707',
      '950': '#0F0903',
      base: '#E2AE64',
    },
    rose: {
      '50': '#FBF9F9',
      '100': '#F1EAE9',
      '200': '#DDCDCA',
      '300': '#CAB0AA',
      '400': '#B6938B',
      '500': '#A2766C',
      '600': '#865E55',
      '700': '#674841',
      '800': '#45302B',
      '900': '#221816',
      '950': '#110C0B',
      base: '#674841',
    },
    brick: {
      '50': '#FBF6F5',
      '100': '#F4E8E5',
      '200': '#E7CAC5',
      '300': '#DAACA4',
      '400': '#CC8F84',
      '500': '#BF7163',
      '600': '#A65344',
      '700': '#7E3F34',
      '800': '#562B23',
      '900': '#2F1713',
      '950': '#1B0D0B',
      base: '#BF7163',
    },
  },
  fontSizes: {},
  fontWeights: {},
  lineHeights: {},
  boxShadows: {},
}
  