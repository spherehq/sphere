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
        linkHref: '/about',
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
        linkHref: 'https://spectrum.chat/sphere',
        title: 'Community',
      },
      {
        linkHref:
          'https://github.com/spherehq/sphere/issues/new?assignees=&labels=bug&template=bug_report.md&title=bug%3A+',
        title: 'Bug Reports',
      },
      {
        linkHref:
          'https://github.com/spherehq/sphere/issues/new?assignees=&labels=feature+request&template=feature_request.md&title=feat%3A+',
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
        linkHref: '/code-of-conduct',
        title: 'Code of Conduct',
      },
      {
        linkHref: '/privacy-policy',
        title: 'Privacy Policy',
      },
      {
        linkHref: '/terms-of-service',
        title: 'Terms of Service',
      },
    ],
  },
]

const Link = styled.a<{ to?: string }>`
  position: relative;
  display: inline-block;
  color: ${props => props.theme.colors.palette.white};
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  letter-spacing: 1px;

  &:hover {
    color: ${props => props.theme.colors.palette.blue.base};
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
    background-color: ${props => props.theme.colors.palette.blue.base};
    transition: opacity 0.2s ease-in-out 0s, width 0.2s ease-in-out 0s;
  }
`

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-indent: 0;
  text-transform: inherit;
`

export const LinkList = ({ linkAs }) => (
  <Grid gap justifyContent="flex-end">
    {sections.map(({ title, items }) => (
      <Box key={title} width={{ xs: 1, md: 1 / 2, lg: 1 / 3 }} mb={8}>
        <h3>{title}</h3>
        <StyledList>
          {items.map(({ title, linkHref }) => (
            <li key={title}>
              {linkHref.includes(`http`) ? (
                <Link href={linkHref} rel="noopener" target="_blank">
                  {title}
                </Link>
              ) : (
                <Link href={linkHref} to={linkHref} as={linkAs}>
                  {title}
                </Link>
              )}
            </li>
          ))}
        </StyledList>
      </Box>
    ))}
  </Grid>
)
