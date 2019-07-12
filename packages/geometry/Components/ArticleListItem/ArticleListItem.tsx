import * as React from 'react'

import { styled } from '@spherehq/geometry/Theme'
import { Box } from '@spherehq/geometry/Components/Box'
import { Flex } from '@spherehq/geometry/Components/Flex'

import { formatDistanceStrict } from 'date-fns'

const ImagePreview = styled(Box)<{ pic: string; large: boolean }>`
  background-image: url("${props => props.pic}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(51, 51, 51, 0.1);
  margin-bottom: 15px;
  width: 85px;
  height: 85px;

  ${props => props.theme.breakpoints.up('md')} {
    box-shadow: 0px 2px 5px rgba(51, 51, 51, 0.1);
    width: ${props => (props.large ? `150px` : `85px`)};
    height: ${props => (props.large ? `140px` : `75px`)};
  }
`

const ArticleMetaInline = styled(Box)`
  span {
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.palette.purple.dark};
  }

  span + span {
    font-weight: 400;
    text-transform: none;
  }
`

const StyledLink = styled.a<{ to: string }>`
  display: block;
  color: ${props => props.theme.palette.primary};

  &:hover,
  &:focus {
    ${props => props.theme.breakpoints.up('md')} {
      text-decoration: none;

      h3 {
        color: ${props => props.theme.colors.palette.blue.dark};
        text-decoration: underline;
        text-decoration-color: ${props => props.theme.colors.palette.blue.base};
      }
    }
  }
`

const SummaryText = styled.p`
  font-size: 14px;
  line-height: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${props => props.theme.breakpoints.up('md')} {
    display: inherit;
    -webkit-line-clamp: 2;
  }
`

export interface ArticleListItemProps {
  title: string
  summary?: string
  link: string
  linkAs?: any
  previewImageUrl: string
  publishedAt: string
  author: {
    firstName: string
    lastName: string
  }
  smallPreview?: boolean
}

export const ArticleListItem = ({
  title,
  summary,
  link,
  linkAs,
  previewImageUrl,
  publishedAt,
  author,
  smallPreview,
}: ArticleListItemProps) => (
  <Box as="li">
    <StyledLink href={link} to={link} as={linkAs}>
      <Flex as="article">
        <Box>
          <ImagePreview
            pic={previewImageUrl}
            mr={{ xs: 6, md: 6, lg: 6 }}
            large={smallPreview ? false : true || true}
          />
        </Box>
        <Box>
          <h3 style={{ margin: 0, fontSize: '18px', lineHeight: '22px' }}>
            {title}
          </h3>
          {summary && <SummaryText>{summary}</SummaryText>}
          <ArticleMetaInline>
            <span>{`${author.firstName} ${author.firstName}`}</span>{' '}
            <span>
              {`wrote this ${formatDistanceStrict(
                new Date(publishedAt),
                new Date(),
                {
                  addSuffix: true,
                },
              )}`}
            </span>
          </ArticleMetaInline>
        </Box>
      </Flex>
    </StyledLink>
  </Box>
)
