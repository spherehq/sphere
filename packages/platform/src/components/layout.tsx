import * as React from 'react'

import {
  theme,
  ThemeProvider,
  withTheme,
  styled,
} from '@spherehq/geometry/Theme'
import { Container } from '@spherehq/geometry/Components/Container'
import { GlobalStyle } from '@spherehq/geometry/Components/GlobalStyle'

import { Footer } from './Footer'
import { Header } from './Header'

const HeaderWithTheme = withTheme(Header)

const StyledContainer = styled(Container)`
  padding: 90px 32px 64px 32px;
  min-height: 50vh;

  ${props => props.theme.breakpoints.down('md')} {
    padding-top: 64px;
  }
`

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <HeaderWithTheme />
      <StyledContainer limitWidth>{children}</StyledContainer>
      <Footer />
    </React.Fragment>
  </ThemeProvider>
)
