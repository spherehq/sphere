import * as React from 'react'

import { styled } from '@spherehq/geometry/Theme'
import { Box } from '@spherehq/geometry/Components/Box'

const AvatarContainer = styled.div<{ withShadow: boolean; mini: boolean }>`
  display: inline-flex;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: ${props => props.theme.colors.palette.purple.lightest};
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${({ withShadow }) =>
    withShadow &&
    `
    box-shadow: 0px 8px 8px rgba(51, 51, 51, 0.1);
  `}

  span {
    ${({ mini }) =>
      mini &&
      `
      line-height: 19px;
      font-size: 19px;
    `}

    ${({ mini, theme }) =>
      !mini &&
      `
      line-height: 28px;
      font-size: 28px;

      ${theme.breakpoints.up('md')} {
        line-height: 42px;
        font-size: 42px;
      }
    `}

    font-weight: bold;
    color: ${props => props.theme.colors.primary};
  }

  img {
    width: 100%;
    height: 100%;
  }
`

export type AvatarProps = {
  firstName: string
  lastName: string
  withShadow: boolean
  mini: boolean
  imageUrl?: string
}

export const Avatar = ({
  firstName,
  lastName,
  withShadow,
  mini,
  imageUrl,
}: AvatarProps) => (
  <Box
    width={mini ? `42px` : { xs: `76px`, md: `110px`, lg: `110px` }}
    height={mini ? `42px` : { xs: `76px`, md: `110px`, lg: `110px` }}
  >
    <AvatarContainer withShadow={withShadow} mini={mini}>
      {imageUrl ? (
        <img
          src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14141997_10157405208100541_4799243288703777088_n.jpg?_nc_cat=100&_nc_ht=scontent-lht6-1.xx&oh=e13c301caa3d9ede775875cd5d775f85&oe=5D315C2F"
          alt={`${firstName} ${lastName}`}
        />
      ) : (
        <span>{`${firstName.substr(0, 1)}${lastName.substr(0, 1)}`}</span>
      )}
    </AvatarContainer>
  </Box>
)
