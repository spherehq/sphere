import * as React from 'react'

import { styled } from '../../Theme'

const StyledCode = styled.code`
  color: ${props => props.theme.colors.palette.white};
  background: #282a36;
  text-shadow: none;
  font-size: 16px;
  font-family: 'Fira Code', monospace;
  line-height: 24px;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  tab-size: 4;
  hyphens: none;

  .namespace {
    opacity: 0.7;
  }

  .token {
    color: #ff79c6;

    &.plain-text {
      color: ${props => props.theme.colors.palette.white};
    }

    &.doctype,
    &.cdata,
    &.comment {
      color: #6272a4;
    }

    &.boolean,
    &.constant,
    &.null,
    &.number {
      color: #bd93f9;
    }

    &.prolog,
    &.selector,
    &.entity,
    &.operator {
      color: #8be9fd;
    }

    &.tag,
    &.string,
    &.url,
    &.attr-value,
    &.punctuation,
    &.function {
      color: #f1fa8c;
    }

    &.regex,
    &.variable,
    &.placeholder &.atrule,
    &.attr-name,
    &.statement {
      color: #65e883;
    }

    &.keyword,
    &.control &.builtin,
    &.important,
    &.char,
    &.tag,
    &.deleted,
    &.directive &.namespace {
      color: #ff79c6;
    }

    &.unit,
    &.symbol,
    &.class-name,
    &.property,
    &.interpolation-punctuation {
      color: #ffb96a;
    }

    &.parameter {
      color: #ffb96a;
    }

    &.function-variable {
      color: #65e883;
    }

    &.important {
      font-weight: bold;
    }

    &.bold {
      font-weight: bold;
    }

    &.italic,
    &.plain-text {
      font-style: italic;
    }

    &.entity {
      cursor: help;
    }
  }

  .language-css {
    .token {
      &.url,
      &.function {
        color: #50fa7b;
      }
    }
  }

  .language-c,
  .language-cpp {
    .token {
      &.string {
        color: #8be9fd;
      }
    }
  }

  .language-java {
    .token {
      &.class-name {
        color: #8be9fd;
      }
    }

    span {
      &.token {
        &.class-name {
          color: #8be9fd;
        }
      }
    }
  }

  .language-markup {
    .token {
      &.attr-value {
        color: #8be9fd;
      }

      &.tag {
        $color: #50fa7b;
      }
    }
  }

  .language-objectivec {
    .token {
      &.property {
        color: #8be9fd;
      }

      &.string {
        color: #50fa7b;
      }
    }
  }

  .language-php {
    .token {
      &.boolean,
      &.keyword {
        color: #8be9fd;
      }

      &.function {
        color: #ff79c6;
      }
    }
  }

  .language-ruby {
    .token {
      &.symbol {
        color: #8be9fd;
      }

      &.class-name {
        color: #ffb86c;
      }
    }
  }

  .gatsby-highlight-code-line {
    position: relative;
    display: block;
    z-index: 1;
    border-left: 3px solid #bd93f9;
    margin: 0 -15px;
    padding: 0 12px;
  }
`

export const CodeBlock = ({ children }) => <StyledCode>{children}</StyledCode>
