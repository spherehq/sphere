import { Icon as ExternalIcon } from '@blueprintjs/core'
import { styled } from '@spherehq/geometry/Theme'

export const Icon = styled(ExternalIcon)`
  &:hover {
    cursor: pointer;
    svg {
      fill: ${props => props.theme.colors.cta};
    }
  }

  &:active {
    cursor: pointer;
    svg {
      fill: ${props => props.theme.colors.active};
    }
  }

  &:focus {
    cursor: pointer;
    svg {
      fill: ${props => props.theme.colors.focus};
    }
  }
`
