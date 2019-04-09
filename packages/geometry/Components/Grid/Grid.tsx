import * as React from 'react'

import { flexbox, spacing, SpacingProps, FlexboxProps } from '../../System'
import { styled, ThemeInterface } from '../../Theme'

const defaultGap = { xs: 6, lg: 7 }

const neg = gap => {
  if (typeof gap === 'number') return -gap
  return Object.keys(gap).reduce((acc, curr) => {
    acc[curr] = -gap[curr]
    return acc
  }, {})
}

const getColGap = ({ gap, colGap }) => {
  let v = colGap || gap || 0
  if (v && typeof v === 'boolean') {
    v = defaultGap
  }
  return v
}

const getRowGap = ({ gap, rowGap }) => {
  let v = rowGap || gap || 0
  if (v && typeof v === 'boolean') {
    v = defaultGap
  }
  return v
}

const outerGap = props => {
  const colGap = getColGap(props)
  const rowGap = getRowGap(props)

  return spacing({
    theme: props.theme,
    ml: neg(colGap),
    mb: neg(rowGap),
  })
}

const innerGap = props => {
  const colGap = getColGap(props)
  const rowGap = getRowGap(props)

  return spacing({
    theme: props.theme,
    pl: colGap,
    pb: rowGap,
  })
}

type Gap = boolean | number | string | object

export interface GridProps extends SpacingProps, FlexboxProps {
  children?: React.ReactNode
  gap?: Gap
  colGap?: Gap
  rowGap?: Gap
  theme?: ThemeInterface
}

export const Grid = styled.div<GridProps>`
  display: flex;
  flex-wrap: wrap;
  ${flexbox};
  ${spacing};
  ${outerGap}
  > * {
    ${innerGap}
  }
`
