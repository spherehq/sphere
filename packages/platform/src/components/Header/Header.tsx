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

const GetStartedButton = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.palette.purple.dark};
  color: ${({ theme }) => theme.palette.text};
  border-radius: 2px;
  padding: 7px 15px;

  font-family: 'Titillium Web', sans-serif;
  font-size: 14px;
  line-height: 14px;
  font-style: normal;
  font-weight: bold;
  text-align: center;

  outline-offset: 0;
  outline: none;

  &:hover,
  &:focus,
  &:focus:enabled {
    background: ${({ theme }) => theme.colors.palette.purple.dark};
    color: ${({ theme }) => theme.palette.textAlternative};
  }

  &:active {
    box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.297554);
  }

  &:disabled {
    opacity: 0.3;
  }
`

export const Header: React.FC<{ theme: ThemeInterface }> = () => (
  <StyledHeaderWrapper hasShadow={true}>
    <Container limitWidth>
      <StyledHeaderContent>
        <Flex alignItems="center" justifyContent="space-between">
          <Box style={{ height: '42px' }}>
            <StyledLogoLink to="/">
              <Logo width="42" height="42" />
            </StyledLogoLink>
          </Box>
          <Box width={[1, 1, 2 / 3]} pl={[6, 6, 0]}>
            <Search />
          </Box>
          <Box display={['none', 'none', 'inherit']}>
            <Flex>
              <Box pr={6}>
                <GetStartedButton>Get Started</GetStartedButton>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </StyledHeaderContent>
    </Container>
  </StyledHeaderWrapper>
)
