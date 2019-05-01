import * as React from 'react'

import { styled } from '../../Theme'
import { Box } from '../../Components/Box'
import { Flex } from '../../Components/Flex'
import { Avatar } from '../../Components/Avatar'
import { AuthorProps } from '../../Components/AuthorBlock/AuthorBlock'
import { formatDistanceStrict } from 'date-fns'

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
    margin: 0;
    overflow: hidden;
    color: ${props => props.theme.colors.primary};
  }
`

const StyledHeroImageBox = styled(Box)<{ imageUrl: string | undefined }>`
  display: block;
  position: relative;
  height: 170px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

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

const StyledLink = styled.a<{ to: string }>`
  display: block;
  border-radius: 5px;
  border: 1px solid #ddd;
  text-decoration: none;

  transition: all 0.2s ease-in-out 0s;
  box-shadow: 0px 2px 8px rgba(51, 51, 51, 0.2485);

  &:focus {
    outline: none;
  }

  &:hover {
    ${props => props.theme.breakpoints.up('md')} {
      box-shadow: 0px 15px 40px rgba(51, 51, 51, 0.15);
    }

    text-decoration: none;
  }
`

const StyledPublishedAtBox = styled(Box)`
  span {
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    text-transform: uppercase;
    color: #666666;
  }

  span + span {
    font-weight: 400;
    text-transform: none;
  }
`

const StyledAvatarWrapper = styled.div`
  position: absolute;
  bottom: -22.5px;
  left: 18px;
`

export const ArticleCard = ({
  title,
  link,
  linkAs,
  heroImageUrl,
  dateTime,
  author,
}: {
  title: string
  link: string
  linkAs?: any
  heroImageUrl?: string
  dateTime: string
  author: AuthorProps
}) => (
  <Box>
    <StyledLink href={link} to={link} as={linkAs}>
      <StyledHeroImageBox imageUrl={heroImageUrl}>
        <StyledAvatarWrapper>
          <Avatar
            firstName={author.firstName}
            lastName={author.lastName}
            mini={true}
            withShadow
          />
        </StyledAvatarWrapper>
      </StyledHeroImageBox>
      <StyledHeadingBox>
        <Flex alignItems={`center`} justifyContent={`flex-start`} mt={5}>
          <StyledPublishedAtBox>
            <span>{`${author.firstName} ${author.lastName}`}</span>{' '}
            <span>
              {`wrote this ${formatDistanceStrict(
                new Date(dateTime),
                new Date(),
                {
                  addSuffix: true,
                },
              )}`}
            </span>
          </StyledPublishedAtBox>
        </Flex>
        <h1>{title}</h1>
      </StyledHeadingBox>
    </StyledLink>
  </Box>
)
