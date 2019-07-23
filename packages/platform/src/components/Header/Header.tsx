import * as React from 'react'

import { Link } from 'gatsby'
import { IconNames } from '@blueprintjs/icons'

import { styled, ThemeInterface } from '@spherehq/geometry/Theme'
import { Box } from '@spherehq/geometry/Components/Box'
import { Flex } from '@spherehq/geometry/Components/Flex'
import { Container } from '@spherehq/geometry/Components/Container'

import { ZINDEX_STICKY_HEADER, TRANSITON_TIME_MS } from './constants'
import { Search } from '../Search'
import { Icon } from '../Icon'
import { Logo } from '../Logo'

const StyledHeaderWrapper = styled.header<{
  hasShadow: boolean
}>`
  background-color: ${props => props.theme.colors.palette.white};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${ZINDEX_STICKY_HEADER};

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
    opacity: ${({ hasShadow }) => (hasShadow ? 1 : 0)};
    content: '';
    transition: opacity ${TRANSITON_TIME_MS};
    z-index: -1;
  }
`

const StyledHeaderContent = styled.div`
  background-color: ${props => props.theme.colors.palette.white};
  height: 58px;
  padding: 8px;
`

const StyledLogoLink = styled(Link)`
  outline-offset: 0;
  outline: none;
`

export const Header: React.FC<{ theme: ThemeInterface }> = ({ theme }) => (
  <StyledHeaderWrapper hasShadow={true}>
    <Container limitWidth>
      <StyledHeaderContent>
        <Flex alignItems="center" justifyContent="space-between">
          <Box style={{ height: '42px' }}>
            <StyledLogoLink to="/">
              <Logo width="42" height="42" />
            </StyledLogoLink>
          </Box>
          <Box width={2 / 3}>
            <Search />
          </Box>
          <Box style={{ height: '24px' }}>
            <Flex>
              <Box px={4}>
                <Icon
                  icon={IconNames.USER}
                  iconSize={24}
                  color={theme.palette.primary}
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </StyledHeaderContent>
    </Container>
  </StyledHeaderWrapper>
)
