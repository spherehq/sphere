import * as React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

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
  margin-top: 20px;
  padding: 64px 32px;
  min-height: 50vh;
`

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />
            <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
          </Helmet>
          <GlobalStyle />
          <HeaderWithTheme />
          <main>
            <StyledContainer limitWidth>{children}</StyledContainer>
          </main>
          <Footer />
        </React.Fragment>
      </ThemeProvider>
    )}
  />
)
