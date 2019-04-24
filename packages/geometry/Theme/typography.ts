import { BASE_FONT_SIZE } from './constants'

const FONT_FAMILY_NAME = 'Titillium Web, sans-serif'
const FONT_WEIGHT_BOLD = 700
const FONT_WEIGHT_REGULAR = 400

interface TypographyMapInterface {
  type: string
  xs: string
  md: string
}

interface TypographyVariantInterface {
  fontFamily: string
  fontSize: string | number
  fontWeight: string | number
  lineHeight: number
}

export interface TypographyInterface {
  // Typography variants
  display3: TypographyVariantInterface
  display2: TypographyVariantInterface
  display1: TypographyVariantInterface
  body2: TypographyVariantInterface
  body1: TypographyVariantInterface
  caption2: TypographyVariantInterface
  caption1: TypographyVariantInterface
  button: TypographyVariantInterface
  nav1: TypographyVariantInterface
  nav2: TypographyVariantInterface

  // Responsive typography maps
  h1: TypographyMapInterface
  h2: TypographyMapInterface
  h3: TypographyMapInterface
  body: TypographyMapInterface
}

const pxToRem = (size: number) => `${size / BASE_FONT_SIZE}rem`

const createVariant = (
  fontFamily: string,
  fontSizePx: number,
  fontWeight: string | number,
  lineHeightPx: number,
): TypographyVariantInterface => ({
  fontWeight,
  fontFamily,
  fontSize: pxToRem(fontSizePx),
  lineHeight: lineHeightPx / fontSizePx,
})

const createMap = (map): TypographyMapInterface => ({
  type: 'map',
  ...map,
})

export const typography: TypographyInterface = {
  display3: createVariant(FONT_FAMILY_NAME, 48, FONT_WEIGHT_BOLD, 52),
  display2: createVariant(FONT_FAMILY_NAME, 20, FONT_WEIGHT_BOLD, 32),
  display1: createVariant(FONT_FAMILY_NAME, 18, FONT_WEIGHT_BOLD, 24),
  body2: createVariant(FONT_FAMILY_NAME, 18, FONT_WEIGHT_REGULAR, 24),
  body1: createVariant(FONT_FAMILY_NAME, 16, FONT_WEIGHT_REGULAR, 24),
  caption2: createVariant(FONT_FAMILY_NAME, 14, FONT_WEIGHT_BOLD, 20),
  caption1: createVariant(FONT_FAMILY_NAME, 14, FONT_WEIGHT_REGULAR, 20),
  button: createVariant(FONT_FAMILY_NAME, 18, FONT_WEIGHT_REGULAR, 28),
  nav2: createVariant(FONT_FAMILY_NAME, 16, FONT_WEIGHT_REGULAR, 24),
  nav1: createVariant(FONT_FAMILY_NAME, 14, FONT_WEIGHT_REGULAR, 24),

  h1: createMap({ xs: 'display2', md: 'display3' }),
  h2: createMap({ xs: 'display2', md: 'display3' }),
  h3: createMap({ xs: 'display1', md: 'display2' }),
  body: createMap({ xs: 'body1', md: 'body2' }),
}
