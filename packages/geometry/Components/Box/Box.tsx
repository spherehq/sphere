import { all, AllSystemProps } from '../../system'
import { styled } from '../../Theme'

export interface BoxProps extends AllSystemProps {
  children?: React.ReactNode
}

export const Box = styled.div<BoxProps>`
  ${all}
`
