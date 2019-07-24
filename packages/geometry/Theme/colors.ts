export interface PaletteInterface {
  white: string
  black: string
  purple: {
    darkest: string
    dark: string
    base: string
    light: string
    lighter: string
    lightest: string
  }
  blue: {
    base: string
    dark: string
  }
  yellow: {
    dark: string
    base: string
    light: string
    lightest: string
  }
  green: string
  red: string
}

const palette: PaletteInterface = {
  purple: {
    darkest: '#1a161d',
    dark: '#4c4452',
    base: '#766e7d',
    light: '#a49aab',
    lighter: '#d4cadb',
    lightest: '#ece8ef',
  },
  blue: {
    base: '#00a7e1',
    dark: '#008fbf',
  },
  yellow: {
    dark: '#f2b830',
    base: '#ffd334',
    light: '#f3c969',
    lightest: '#f2d99d',
  },
  white: '#fafafa',
  black: '#111111',
  green: '#a4d037',
  red: '#f05230',
}

export interface ColorsInterface {
  palette: PaletteInterface
  primary: string
  cta: string
  active: string
  focus: string
  application: string
  text: string
  textAlternative: string
  success: string
  error: string
  warning: string
}

export const colors: ColorsInterface = {
  palette,
  primary: palette.purple.darkest,
  cta: palette.blue.base,
  active: palette.blue.base,
  focus: palette.blue.base,
  application: palette.white,
  text: palette.purple.darkest,
  textAlternative: palette.white,
  success: palette.green,
  error: palette.red,
  warning: palette.yellow.dark,
}
