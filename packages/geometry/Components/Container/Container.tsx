import * as React from 'react'

import { spacing } from '../../system'
import { styled, css, ThemeInterface } from '../../Theme'

const defaultPadding = { xs: 6, md: 7 }

const applyPadding = props =>
  spacing({ theme: props.theme, px: props.padding || defaultPadding })

const applyLimitWidth = props => {
  if (props.limitWidth) {
    return css`
      max-width: ${props.theme.siteWidth}px;
      box-sizing: content-box;
      > div {
        box-sizing: border-box;
      }
    `
  }
  return undefined
}

const applyFree = props => {
  if (!props.free) {
    return css`
      margin-left: auto;
      margin-right: auto;
    `
  }
  return undefined
}

interface StyledContainerProps {
  padding?: number | string | object
  limitWidth?: boolean
  free?: boolean
  theme?: ThemeInterface
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

const StyledContainer = styled.div<StyledContainerProps>`
  ${applyPadding}
  ${applyLimitWidth}
  ${applyFree}
`

export interface ContainerProps extends StyledContainerProps {
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({
  children,
  padding,
  limitWidth = false,
  free = false,
  ...rest
}) => (
  <StyledContainer
    limitWidth={limitWidth}
    free={free}
    padding={padding}
    {...rest}
  >
    <div>{children}</div>
  </StyledContainer>
)
