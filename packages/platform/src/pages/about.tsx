import * as React from 'react'

import { styled } from '@spherehq/geometry/Theme'
import { Container } from '@spherehq/geometry/Components/Container'
import { Box } from '@spherehq/geometry/Components/Box'
import { Grid } from '@spherehq/geometry/Components/Grid'

const SubHeading = styled.h5`
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: 1px;
  color: ${props => props.theme.colors.palette.purple.base};
  text-transform: uppercase;
  margin: 0;
  text-align: center;

  & > h1 {
    margin-bottom: 20px;
  }
`

const HeroHeading = styled.h1`
  font-size: 48px;
  line-height: 52px;
  letter-spacing: -1.5px;
  font-weight: 400;
  text-align: center;

  ${props => props.theme.breakpoints.down('md')} {
    font-size: 32px;
    line-height: 38px;
  }
`

const BoxWithShadow = styled(Box)`
  box-shadow: 0px 2px 8px rgba(51, 51, 51, 0.2485);
  transition: box-shadow 0.5s ease-in-out 0s;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 15px 40px rgba(51, 51, 51, 0.15);
    border-radius: 3px;
  }
`

const MissionHeading = styled(SubHeading)`
  color: ${props => props.theme.colors.text};
  margin: 8px 0 12px 0;
`

const MissonCard = styled(BoxWithShadow)`
  text-align: center;

  &:focus {
    outline: ${props => props.theme.colors.palette.purple.base} dotted 2px;
    outline-offset: 5px;
  }

  p {
    font-size: 16px;
  }
`

export default () => (
  <Container limitWidth padding={0}>
    <Container padding={{ xs: 0, md: 8, lg: 13 }}>
      <Box my={9}>
        <SubHeading>Our Mission</SubHeading>
        <HeroHeading>
          We want to change how you <strong>discover</strong>,{' '}
          <strong>share</strong> and <strong>create</strong> content
        </HeroHeading>
        <p style={{ textAlign: 'center', marginTop: '32px' }}>
          We want to empower <i>publishers</i>, <i>bloggers</i>,{' '}
          <i>influencers</i>, <strong>people like you</strong>, to think
          differently about the content you create. We're building a platform
          with a different way of doing things.
        </p>
      </Box>
    </Container>
    <Grid colGap={10} rowGap={{ xs: 8, s: 8, md: 8, lg: 0 }}>
      <Box width={{ xs: 1, md: 1, lg: 1 / 3 }}>
        <MissonCard p={5}>
          <MissionHeading>Discover</MissionHeading>
          <p>
            We want to make content discovery more transparent and feel less
            like a popularity contest.
          </p>
        </MissonCard>
      </Box>
      <Box width={{ xs: 1, md: 1, lg: 1 / 3 }}>
        <MissonCard p={5}>
          <MissionHeading>Share</MissionHeading>
          <p>
            We want to make sharing content safer, giving you more control on
            how you share and engage with content.
          </p>
        </MissonCard>
      </Box>
      <Box width={{ xs: 1, md: 1, lg: 1 / 3 }}>
        <MissonCard p={5}>
          <MissionHeading>Create</MissionHeading>
          <p>
            We want to build tools that empower you to create content in a way
            that works best for you. Not all content is created equally.
          </p>
        </MissonCard>
      </Box>
    </Grid>
  </Container>
)
