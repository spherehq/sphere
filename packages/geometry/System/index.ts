import {
  borders,
  compose,
  css,
  display,
  flexbox,
  palette,
  positions,
  shadows,
  sizing,
  spacing,
  style,
} from '@material-ui/system'

import { typography } from './typography'

const all = compose(
  borders,
  display,
  flexbox,
  palette,
  positions,
  shadows,
  sizing,
  spacing,
  typography,
)

// Note: waiting for Material UI to add types
// See: https://github.com/mui-org/material-ui/issues/14605

type SystemProp = number | string | object

export interface BorderProps {
  border?: SystemProp
  borderTop?: SystemProp
  borderRight?: SystemProp
  borderBottom?: SystemProp
  borderLeft?: SystemProp
  borderColor?: SystemProp
  borderRadius?: SystemProp
}

export interface DisplayProps {
  display?: SystemProp
  displayPrint?: SystemProp
}

export interface FlexboxProps {
  flexDirection?: SystemProp
  flexWrap?: SystemProp
  justifyContent?: SystemProp
  alignItems?: SystemProp
  alignContent?: SystemProp
  order?: SystemProp
  flexGrow?: SystemProp
  flexShrink?: SystemProp
  alignSelf?: SystemProp
}

export interface PaletteProps {
  color?: SystemProp
  bgcolor?: SystemProp
}

export interface PositionsProps {
  zIndex?: SystemProp
  position?: SystemProp
  top?: SystemProp
  right?: SystemProp
  bottom?: SystemProp
  left?: SystemProp
}

export interface ShadowsProps {
  boxShadow?: SystemProp
}

export interface SizingProps {
  width?: SystemProp
  height?: SystemProp
  minWidth?: SystemProp
  minHeight?: SystemProp
  maxWidth?: SystemProp
  maxHeight?: SystemProp
}
export interface SpacingProps {
  m?: SystemProp
  mt?: SystemProp
  mr?: SystemProp
  mb?: SystemProp
  ml?: SystemProp
  mx?: SystemProp
  my?: SystemProp
  p?: SystemProp
  pt?: SystemProp
  pr?: SystemProp
  pb?: SystemProp
  pl?: SystemProp
  px?: SystemProp
  py?: SystemProp
}

export interface TypographyProps {
  textAlign?: SystemProp
  fontWeight?: SystemProp
  fontSize?: SystemProp
  fontFamily?: SystemProp
  typography?: SystemProp /* additional */
}

export interface SizingSpacingProps extends SizingProps, SpacingProps {}

export interface AllSystemProps
  extends BorderProps,
    DisplayProps,
    FlexboxProps,
    PaletteProps,
    PositionsProps,
    ShadowsProps,
    SizingProps,
    SpacingProps {}

const sizingSpacing = compose(
  sizing,
  spacing,
)

export {
  compose,
  css,
  style,
  // system functions
  borders,
  display,
  flexbox,
  palette,
  positions,
  shadows,
  sizing,
  spacing,
  typography,
  // composed
  all,
  sizingSpacing,
}
