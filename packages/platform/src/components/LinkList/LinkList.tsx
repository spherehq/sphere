import * as React from 'react'

import { styled } from '@spherehq/geometry/Theme'
import { Box } from '@spherehq/geometry/Components/Box'
import { Grid } from '@spherehq/geometry/Components/Grid'

const sections = [
  {
    title: 'Company',
    items: [
      {
        linkHref: '/',
        title: 'Home',
      },
      {
        linkHref: '/',
        title: 'About',
      },
      {
        linkHref: '/',
        title: 'Blog',
      },
    ],
  },
  {
    title: 'Support',
    items: [
      {
        linkHref: '/',
        title: 'Community',
      },
      {
        linkHref: '/',
        title: 'Bug Reports',
      },
      {
        linkHref: '/',
        title: 'Feature Requests',
      },
      {
        linkHref: '/',
        title: 'Documentation',
      },
    ],
  },
  {
    title: 'Safety',
    items: [
      {
        linkHref: '/',
        title: 'Code of Conduct',
      },
      {
        linkHref: '/',
        title: 'Privacy Policy',
      },
      {
        linkHref: '/',
        title: 'Terms of Service',
      },
    ],
  },
]

const Link = styled.a<{ to: string }>`
  position: relative;
  display: inline-block;
  color: ${props => props.theme.colors.palette.yellow.base};
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  letter-spacing: 1px;

  &:hover {
    color: ${props => props.theme.colors.palette.yellow.dark};
    text-decoration: none;

    &::after {
      width: 100%;
      opacity: 1;
      transition: opacity 0.2s ease-in-out 0s, width 0.2s ease-in-out 0s;
    }
  }

  &::after {
    position: absolute;
    bottom: 0px;
    left: 0px;
    content: '';
    height: 2px;
    width: 0%;
    opacity: 0;
    background-color: ${props => props.theme.colors.palette.yellow.base};
    transition: opacity 0.2s ease-in-out 0s, width 0.2s ease-in-out 0s;
  }
`

export const LinkList = ({ linkAs }) => (
  <Grid gap justifyContent="flex-end">
    {sections.map(({ title, items }) => (
      <Box key={title} width={{ xs: 1, md: 1 / 2, lg: 1 / 3 }} mb={8}>
        <h3>{title}</h3>
        <ul>
          {items.map(({ title, linkHref }) => (
            <li key={title}>
              <Link href={linkHref} to={linkHref} as={linkAs}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    ))}
  </Grid>
)
