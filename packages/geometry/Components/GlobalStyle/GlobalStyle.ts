import { typography as typographyFn } from '../../system'
import { ThemeInterface, colorValue } from '../../theme'
import { createGlobalStyle } from 'styled-components'

interface GlobalStyleInterface {
  theme?: ThemeInterface
}

const typography = values => ({ theme }) =>
  typographyFn({ theme, typography: values })

export const GlobalStyle = createGlobalStyle<GlobalStyleInterface>`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *::before, *::after  {
    box-sizing: inherit;
  }

  body {
    background-color: ${colorValue('application')};
    color: ${colorValue('text')};
    margin: 0;
    ${typography('body')}

  a {
    color: ${colorValue('cta')};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-indent: 0;
  }

  h1 {
    ${props => typography({ ...props, typography: 'h1' })}
  }

  h2 {
    ${props => typography({ ...props, typography: 'h2' })}
  }

  h3 {
    ${props => typography({ ...props, typography: 'h3' })}
  }

  h1, h2, h3, h4, h5, p {
    margin: 0 0 1rem 0;
  }

  button {
    margin: 0;
    border: 0;
    padding: 0;
    background: transparent;

    &:not(:disabled) {
      cursor: pointer;
    }
  }
`
