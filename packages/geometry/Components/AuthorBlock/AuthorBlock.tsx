import * as React from 'react'

import { styled } from '@spherehq/geometry/Theme'
import { Grid } from '@spherehq/geometry/Components/Grid'
import { Box } from '@spherehq/geometry/Components/Box'
import { Avatar } from '@spherehq/geometry/Components/Avatar'

const StyledProfileBox = styled(Box)`
  h1 {
    margin: 0;
  }

  h2 {
    margin: 0;
    font-size: 15px;
  }
`

export interface AuthorProps {
  firstName: string
  lastName: string
  alias: string
  mini?: boolean
}

export const AuthorBlock = ({
  firstName,
  lastName,
  alias,
  mini = false,
}: AuthorProps) => (
  <Grid gap alignItems={`center`} justifyContent={`flex-start`}>
    <Avatar firstName={firstName} lastName={lastName} withShadow mini={mini} />
    <StyledProfileBox>
      <h1>{`${firstName} ${lastName}`}</h1>
      {mini ? null : <h2>{alias}</h2>}
    </StyledProfileBox>
  </Grid>
)
