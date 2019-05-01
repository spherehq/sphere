import * as React from 'react'

import { styled } from '@spherehq/geometry/Theme'
import { Grid } from '@spherehq/geometry/Components/Grid'
import { Box } from '@spherehq/geometry/Components/Box'

const StyledAvatarBox = styled(Box)`
  width: 76px;
  height: 76px;

  ${props => props.theme.breakpoints.up('md')} {
    width: 110px;
    height: 110px;
  }
`

const AvatarContainer = styled.div`
  display: inline-flex;
  position: relative;
  width: 58px;
  height: 58px;
  border-radius: 100%;
  background-color: ${props => props.theme.colors.palette.yellow.lightest};
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0px 8px 8px rgba(51, 51, 51, 0.1);

  ${props => props.theme.breakpoints.up('md')} {
    width: 86px;
    height: 86px;
  }

  span {
    line-height: 24px;
    font-size: 24px;

    ${props => props.theme.breakpoints.up('md')} {
      line-height: 34px;
      font-size: 34px;
    }

    font-weight: bold;
    color: ${props => props.theme.colors.palette.yellow.dark};
  }

  img {
    width: 58px;
    height: 58px;

    ${props => props.theme.breakpoints.up('md')} {
      width: 86px;
      height: 86px;
    }
  }
`

const StyledProfileBox = styled(Box)`
  h1 {
    margin: 0;
  }

  h5 {
    margin: 0;
    font-size: 15px;
  }
`

export type AuthorProps = {
  firstName: string
  lastName: string
  alias: string
  micro?: boolean
}

export const AuthorBlock = ({
  firstName,
  lastName,
  alias,
  micro,
}: AuthorProps) => (
  <Grid gap alignItems={`center`} justifyContent={`flex-start`}>
    <StyledAvatarBox>
      <AvatarContainer>
        {/* <span>JB</span> */}
        <img
          src="https://miro.medium.com/fit/c/240/240/1*Un5nWlD11as7HM-2dozXwQ.jpeg"
          alt={`${firstName} ${lastName}`}
        />
      </AvatarContainer>
    </StyledAvatarBox>
    <StyledProfileBox>
      <h1>{`${firstName} ${lastName}`}</h1>
      {micro ? null : <h5>{alias}</h5>}
    </StyledProfileBox>
  </Grid>
)
