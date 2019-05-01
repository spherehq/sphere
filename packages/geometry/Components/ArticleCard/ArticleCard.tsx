import * as React from 'react'

import { styled } from '../../Theme'
import { Box } from '../../Components/Box'
import { Flex } from '../../Components/Flex'
import { AuthorBlock, AuthorProps } from '../../Components/AuthorBlock'
import { formatDistance } from 'date-fns'

const StyledHeadingBox = styled(Box)`
  padding: 18px;
  height: 125px;

  h1 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -1px;
    margin: 5px 0;
    overflow: hidden;
    color: ${props => props.theme.colors.primary};
  }
`

const StyledHeroImageBox = styled<{ imageUrl: string | undefined }>(Box)`
  display: block;
  height: 170px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;

  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-origin: border-box;
  background-size: cover;
  background-color: #eee;

  ${props => props.theme.breakpoints.up('md')} {
    height: 240px;
  }

  ${props => props.theme.breakpoints.up('lg')} {
    height: 170px;
  }
` as React.FunctionComponent<{ imageUrl: string | undefined }>

const StyledLink = styled.a`
  display: block;
  border-radius: 5px;
  border: 1px solid #ddd;
  text-decoration: none;

  transition: all 0.2s ease-in-out 0s;
  box-shadow: 0px 2px 8px rgba(51, 51, 51, 0.2485);

  &:hover {
    box-shadow: 0px 15px 40px rgba(51, 51, 51, 0.15);
  }
`

const StyledSeparatorBox = styled(Box)`
  &::before {
    font-size: 15px;
    line-height: 15px;
    padding: 0 8px;
    color: ${props => props.theme.colors.primary};
    content: '|';
  }
`

const StyledTimeToReadBox = styled(Box)`
  span {
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    text-transform: uppercase;
    color: #555555;
  }
`

const StyledPublishedAtBox = styled(Box)`
  span {
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    text-transform: uppercase;
    color: #555555;
  }
`

export const ArticleCard = ({
  title,
  link,
  timeToRead,
  heroImageUrl,
  dateTime,
}: {
  title: string
  link: string
  linkAs?: any
  timeToRead: number
  heroImageUrl?: string
  dateTime: string
  author: AuthorProps
}) => (
  <Box>
    <StyledLink href={link}>
      <StyledHeroImageBox imageUrl={heroImageUrl} />
      <StyledHeadingBox>
        <Flex>
          <StyledPublishedAtBox>
            <span>
              {formatDistance(new Date(dateTime), new Date(), {
                addSuffix: true,
              })}
            </span>
          </StyledPublishedAtBox>
          <StyledSeparatorBox />
          <StyledTimeToReadBox>
            <span>{`${timeToRead} min read`}</span>
          </StyledTimeToReadBox>
        </Flex>
        <h1>{title}</h1>
      </StyledHeadingBox>
    </StyledLink>
  </Box>
)
