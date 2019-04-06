import * as React from 'react'
import { styled, theme } from '../../Theme'

import { Box } from '../Box'
import { Flex } from '../Flex'

const DividerWrapper = styled(Flex)`
  background-color: ${props => props.theme.colors.palette.yellow.lightest};
  width: 84px;
  height: 10px;
  border-radius: 14px;
`

const Bar = styled(Box)`
  border-radius: 14px;
  flex: 1;
`

export const Divider = () => (
  <DividerWrapper>
    <Bar />
    <Bar
      style={{
        backgroundColor: theme.colors.palette.yellow.light,
        marginLeft: '-7px',
      }}
    />
    <Bar
      style={{
        backgroundColor: theme.colors.palette.yellow.dark,
        marginLeft: '-7px',
      }}
    />
  </DividerWrapper>
)
