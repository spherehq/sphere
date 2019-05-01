import * as styledComponents from 'styled-components'

// https://github.com/babel/babel/issues/8361
import * as breakpoints from './breakpoints'
import * as colors from './colors'
import * as typography from './typography'

import { BASE_FONT_SIZE } from './constants'
import { spacing } from './spacing'

interface StyledFunctionProps {
  theme: ThemeInterface
}

export const colorValue = (
  color: Exclude<keyof ColorsInterface, 'palette'>,
) => (props: StyledFunctionProps) => props.theme.colors[color]

export const spacingValue = (value: number) => (props: StyledFunctionProps) =>
  props.theme.spacing[value]

export interface ThemeInterface {
  baseFontSize: number
  colors: colors.ColorsInterface
  palette: colors.ColorsInterface // todo: temporary alias
  typography: typography.TypographyInterface
  spacing: number[]
  breakpoints: {
    map: breakpoints.BreakpointsInterface
    keys: string[]
    up: (key: string) => string
    down: (key: string) => string
  }
  siteWidth: number
}

export const theme: ThemeInterface = {
  spacing,
  baseFontSize: BASE_FONT_SIZE,
  colors: colors.colors,
  typography: typography.typography,
  breakpoints: {
    map: breakpoints.breakpointMap,
    keys: Object.keys(breakpoints.breakpointMap),
    up: (key: string) =>
      `@media (min-width: ${breakpoints.breakpointMap[key] /
        BASE_FONT_SIZE}em)`,
    down: (key: string) =>
      `@media (max-width: ${breakpoints.breakpointMap[key] / BASE_FONT_SIZE -
        0.01}em)`,
  },

  palette: colors.colors,
  siteWidth: 1200,
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  withTheme,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>

export { styled, css, createGlobalStyle, keyframes, ThemeProvider, withTheme }

// Export interfaces
export type BreakpointsInterface = breakpoints.BreakpointsInterface
export type ColorsInterface = colors.ColorsInterface
export type TypographyInterface = typography.TypographyInterface
