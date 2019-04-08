import * as React from 'react'

import { Github } from 'styled-icons/fa-brands/Github'
import { Twitter } from 'styled-icons/fa-brands/Twitter'

import { styled } from '@spherehq/geometry/Theme'
import { Box } from '@spherehq/geometry/Components/Box'
import { Flex } from '@spherehq/geometry/Components/Flex'
import { Container } from '@spherehq/geometry/Components/Container'
import { Divider } from '@spherehq/geometry/Components/Divider'
import { LinkList } from '../LinkList'
import { Link } from 'gatsby'
import { Grid } from '@spherehq/geometry/Components/Grid'
import { InputField, FormWrapper, PrimaryButton } from '../SubscribeForm'

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.palette.white};
`

const IconLink = styled.a`
  color: ${props => props.theme.colors.palette.white};

  &:hover,
  &:focus {
    color: '#fff';
  }
`

export const Footer: React.FC<{}> = () => (
  <StyledFooter>
    <Box py={9}>
      <Container limitWidth>
        <Grid gap>
          <Box mt={6} width={{ xs: 1, md: 1 / 2, lg: 1 / 2 }}>
            <Box mb={8}>
              <Divider />
            </Box>
            <Box width={{ xs: 1, md: 1, lg: 2 / 3 }}>
              <h3>Would you like to try it?</h3>
              <p style={{ fontSize: '16px' }}>
                We’re launching a private beta in <strong>Q2 2019</strong>, free
                for anyone interested, with a full release of the platform later
                in 2019.
              </p>
              <FormWrapper>
                <InputField
                  id="email"
                  type="email"
                  placeholder="Email address"
                />
                <PrimaryButton>Notify me</PrimaryButton>
              </FormWrapper>
              <p style={{ fontSize: '12px', lineHeight: '28px', opacity: 0.8 }}>
                We promise to send you only updates about our launch, nothing
                more.
              </p>
            </Box>
          </Box>
          <Box
            mt={{ xs: 4, md: 9, lg: 9 }}
            width={{ xs: 1, md: 1 / 2, lg: 1 / 2 }}
          >
            <Box style={{ marginTop: '10px' }}>
              <LinkList linkAs={Link} />
            </Box>
            <Flex justifyContent="flex-end">
              <Grid gap mr={8} mt={8}>
                <Box>
                  <IconLink
                    href="https://github.com/spherehq"
                    rel="noopener"
                    target="_blank"
                  >
                    <Github width="24" />
                  </IconLink>
                </Box>
                <Box>
                  <IconLink
                    href="https://twitter.com/fullstopmediahq"
                    rel="noopener"
                    target="_blank"
                  >
                    <Twitter width="24" />
                  </IconLink>
                </Box>
              </Grid>
            </Flex>
          </Box>
        </Grid>
      </Container>
    </Box>
  </StyledFooter>
)
