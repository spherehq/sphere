import { typography as typographyFn } from '../../System'
import { ThemeInterface, colorValue } from '../../Theme'
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
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.5px;

    ${props => props.theme.breakpoints.up('md')} {
      font-size: 48px;
      line-height: 52px;
      letter-spacing: -1.5px;
    }
  }

  h2 {
    ${props => typography({ ...props, typography: 'h2' })}
    font-size: 24px;
    line-height: 28px;

    ${props => props.theme.breakpoints.up('md')} {
      font-size: 30px;
      line-height: 36px;
    }
  }

  h3 {
    ${props => typography({ ...props, typography: 'h3' })}
    font-size: 20px;
    line-height: 24px;
  }

  h4 {
    ${props => typography({ ...props, typography: 'h3' })}
    font-size: 20px;
    line-height: 24px;
  }

  h5 {
    ${props => typography({ ...props, typography: 'h3' })}
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #555555;

    ${props => props.theme.breakpoints.up('md')} {
      font-size: 18px;
    }
  }

  h6 {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 1px;
    margin: 1rem 0;
  }

  
  ${props => props.theme.breakpoints.down('md')} {
    h1 {
      margin: 0 0 1rem 0;
    }
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

  main {
    *::selection {
      background-color: ${props => props.theme.colors.palette.purple.lightest};
    }
  }

  pre::selection,
  code::selection, 
  pre ::selection,
  code ::selection {
    background-color: rgba(67, 68, 77, 0.99) !important;
  }

  p > code {
      padding: 3px;
      white-space: normal;
      border-radius: 3px;
      background-color: #282a37d1 !important;
  }
`
