import * as React from 'react'

import { styled } from '../../Theme'

const StyledPre = styled.pre`
  padding: 27px;
  margin: 8px;
  background: #282a36;
`

export const PreBlock = ({ children }) => <StyledPre>{children}</StyledPre>
