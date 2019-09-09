import * as React from 'react'

import { theme, ThemeProvider } from '@spherehq/geometry/Theme'
import { GlobalStyle } from '@spherehq/geometry/Components/GlobalStyle'

import { Account } from '../Account'

export const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <Account />
    </React.Fragment>
  </ThemeProvider>
)
