import * as React from 'react'

import { styled } from '@spherehq/geometry/Theme'
import { Container } from '@spherehq/geometry/Components/Container'
import { Box } from '@spherehq/geometry/Components/Box'
import { Flex } from '@spherehq/geometry/Components/Flex'
import { Grid } from '@spherehq/geometry/Components/Grid'
import { Avatar } from '@spherehq/geometry/Components/Avatar'
import { ArticleListItem } from '@spherehq/geometry/Components/ArticleListItem'

import {
  InputField,
  FormWrapper,
  PrimaryButton,
} from '../components/SubscribeForm'

import { Link } from 'gatsby'
import { formatDistanceStrict } from 'date-fns'

const StyledContainer = styled(Container)`
  padding: 0;

  ${props => props.theme.breakpoints.up('md')} {
    padding: 0 32px;
  }
`

const ImageBackground = styled(Box)`
  background-image: url('https://picsum.photos/800/425/?random=2');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  height: 100%;
  width: 100%;

  ${props => props.theme.breakpoints.up('lg')} {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`

const ImageBox = styled(Box)`
  overflow: hidden;
  order: 1;
  height: 375px;

  ${props => props.theme.breakpoints.up('lg')} {
    order: 2;
    height: inherit;
  }
`

const StyledFlex = styled(Flex)`
  box-shadow: 0px 2px 5px rgba(51, 51, 51, 0.1);
  height: 450px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  ${props => props.theme.breakpoints.up('lg')} {
    height: 285px;
  }
`

const ContentBox = styled(Box)`
  background-color: white;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  order: 2;
  padding: 16px;

  ${props => props.theme.breakpoints.up('lg')} {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    order: 1;
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

const StyledSignup = styled(Box)`
  background-color: rgba(236, 236, 236, 0.9);
  box-shadow: none;
  color: ${props => props.theme.colors.palette.black};
  border-radius: 0;
  width: 100vw;
  height: fit-content;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: 32px;

  ${props => props.theme.breakpoints.up('md')} {
    box-shadow: 0px 2px 5px rgba(51, 51, 51, 0.2);
    border-radius: 8px;
    width: 100%;
    margin: 0 0 32px 0;
    left: inherit;
    right: inherit;
  }

  ${props => props.theme.breakpoints.up('lg')} {
    box-shadow: 0px 2px 5px rgba(51, 51, 51, 0.2);
    border-radius: 8px;
    width: 40%;
    margin: 0;
    left: inherit;
    right: inherit;
  }

  h3,
  p {
    color: ${props => props.theme.colors.palette.black};
  }

  ${FormWrapper} {
    box-shadow: none;
  }

  ${InputField} {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`

const FollowButton = styled.button`
  border: 1px solid ${props => props.theme.colors.palette.purple.light};
  border-radius: 5px;
  padding: 8px 16px;
  margin-top: 20px;

  &:hover,
  &:focus,
  &:active {
    border: 1px solid ${props => props.theme.colors.palette.blue.dark};
    color: ${props => props.theme.colors.palette.blue.dark};
  }
`

const ArticleList = styled(Flex)`
  li {
    margin-bottom: 32px;

    ${props => props.theme.breakpoints.up('md')} {
      margin-bottom: 48px;
    }

    ${props => props.theme.breakpoints.up('xl')} {
      margin-bottom: 16px;
    }
  }

  li:last-child {
    margin-bottom: 0;
  }
`

const MiniArticleList = styled(Flex)`
  li {
    margin-bottom: 14px;
  }

  li:last-child {
    margin-bottom: 0;
  }
`

const Author = styled(Flex)`
  flex-grow: 2;

  ${props => props.theme.breakpoints.up('md')} {
    flex-grow: inherit;
  }
`

export default () => (
  <StyledContainer limitWidth>
    <Grid mt={10} pb={{ xs: 2, md: 4, lg: 8 }}>
      <Box
        width={{ xs: 1, md: 1, lg: '80%', xl: '70%' }}
        pr={{ xs: 0, md: 8, lg: 8 }}
      >
        <StyledFlex flexDirection={{ xs: 'column', md: 'column', lg: 'row' }}>
          <ContentBox
            width={{ xs: 1, md: 1, lg: '40%' }}
            px={{ xs: 6, md: 6, lg: 8 }}
            py={{ xs: 6, md: 6, lg: 6 }}
          >
            <h5 style={{ margin: 0, fontSize: '12px' }}>Featured</h5>
            <h2 style={{ fontSize: '24px', lineHeight: '28px', margin: 0 }}>
              The Worst Advice I Ever Received Was ‘Follow Your Passion’
            </h2>
            <p style={{ fontSize: '14px', lineHeight: '18px' }}>
              My first steps into the working world were guided by the advice
              that had dogged me since my college graduation: To be happy, I was
              told, I needed to follow my passion.
            </p>
            <Flex alignContent="center" alignItems="center">
              <Box pr={6}>
                <Avatar
                  firstName={`Mark`}
                  lastName={`David`}
                  withShadow
                  mini={true}
                  imageUrl={`https://randomuser.me/api/portraits/men/8.jpg`}
                />
              </Box>
              <Box>
                <StyledPublishedAtBox>
                  <span>{`${`David`} ${`Hoist`}`}</span>{' '}
                  <span>
                    {`wrote this ${formatDistanceStrict(
                      new Date('2019-07-09 10:00:00'),
                      new Date(),
                      {
                        addSuffix: true,
                      },
                    )}`}
                  </span>
                </StyledPublishedAtBox>
              </Box>
            </Flex>
          </ContentBox>
          <ImageBox width={{ xs: 1, md: 1, lg: '60%' }}>
            <ImageBackground></ImageBackground>
          </ImageBox>
        </StyledFlex>
      </Box>
      <Box
        width={{ xs: 1, md: 1, lg: '20%', xl: '30%' }}
        mt={{ xs: 8, md: 8, lg: 0 }}
      >
        <MiniArticleList as="ul" flexDirection={`column`}>
          <ArticleListItem
            title={`Scientists Create Airplane That Can Land Itself on Any Runway`}
            link={''}
            linkAs={Link}
            previewImageUrl={`https://picsum.photos/150/150?random=7`}
            publishedAt={`2019-07-09 10:00:00`}
            author={{ firstName: 'Ryan', lastName: 'Whitwam' }}
            smallPreview
          />
          <ArticleListItem
            title={`Scientists Create Airplane That Can Land Itself on Any Runway`}
            link={''}
            linkAs={Link}
            previewImageUrl={`https://picsum.photos/150/150?random=7`}
            publishedAt={`2019-07-09 10:00:00`}
            author={{ firstName: 'Ryan', lastName: 'Whitwam' }}
            smallPreview
          />
          <ArticleListItem
            title={`Scientists Create Airplane That Can Land Itself on Any Runway`}
            link={''}
            linkAs={Link}
            previewImageUrl={`https://picsum.photos/150/150?random=7`}
            publishedAt={`2019-07-09 10:00:00`}
            author={{ firstName: 'Ryan', lastName: 'Whitwam' }}
            smallPreview
          />
        </MiniArticleList>
      </Box>
    </Grid>
    <Flex
      p={6}
      pr={6}
      pt={{ xs: 0, md: 6, lg: 6 }}
      flexDirection={{ xs: `column`, md: `column`, lg: `row` }}
    >
      <Box
        width={{ xs: 1, md: 1, lg: '60%' }}
        order={{ xs: 2, md: 2, lg: 1 }}
        pt={{ xs: 8, md: 0, lg: 0 }}
      >
        <h2 style={{ fontSize: '22px', marginTop: 0 }}>Featured authors</h2>
        <Grid
          colGap={{ xs: 8, md: 6, lg: 8 }}
          rowGap={{ xs: 8, md: 6, lg: 8 }}
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <Author
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Avatar
              firstName={`Jason`}
              lastName={`Brown`}
              withShadow
              mini={false}
              imageUrl={`https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/62594329_10161960235125541_6695466780212592640_n.jpg?_nc_cat=109&_nc_oc=AQk3wyjbSS718_4vRRe5fJiznX264QZmPiloy6VG4VTxGLdn9cTfgRT_7pHQkplIRWI&_nc_ht=scontent-lhr3-1.xx&oh=9ef933443fdaf55926e77cd43c9fd199&oe=5DB28F5E`}
            />
            <FollowButton type="button">Follow</FollowButton>
          </Author>
          <Author
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Avatar
              firstName={`Reese`}
              lastName={`Moss`}
              withShadow
              mini={false}
              imageUrl={`https://randomuser.me/api/portraits/women/20.jpg`}
            />
            <FollowButton type="button">Follow</FollowButton>
          </Author>
          <Author
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Avatar
              firstName={`Mark`}
              lastName={`David`}
              withShadow
              mini={false}
              imageUrl={`https://randomuser.me/api/portraits/men/8.jpg`}
            />
            <FollowButton type="button">Follow</FollowButton>
          </Author>
          <Author
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Avatar
              firstName={`Tess`}
              lastName={`Moon`}
              withShadow
              mini={false}
              imageUrl={`https://randomuser.me/api/portraits/women/2.jpg`}
            />
            <FollowButton type="button">Follow</FollowButton>
          </Author>
          <Author
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Avatar
              firstName={`Charlie`}
              lastName={`Toon`}
              withShadow
              mini={false}
              imageUrl={`https://randomuser.me/api/portraits/women/94.jpg`}
            />
            <FollowButton type="button">Follow</FollowButton>
          </Author>
          <Author
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Avatar
              firstName={`Charlie`}
              lastName={`Toon`}
              withShadow
              mini={false}
              imageUrl={`https://randomuser.me/api/portraits/women/91.jpg`}
            />
            <FollowButton type="button">Follow</FollowButton>
          </Author>
        </Grid>
      </Box>
      <StyledSignup px={8} order={{ xs: 1, md: 1, lg: 2 }}>
        <h3>Would you like to try it?</h3>
        <p style={{ fontSize: '16px' }}>
          We’re launching a private beta in <strong>Q2 2019</strong>, free for
          anyone interested, with a full release of the platform later in 2019.
        </p>
        <FormWrapper>
          <InputField id="email" type="email" placeholder="Email address" />
          <PrimaryButton>Notify me</PrimaryButton>
        </FormWrapper>
        <p style={{ fontSize: '12px', lineHeight: '18px', opacity: 0.8 }}>
          We promise to send you only updates about our launch.
        </p>
      </StyledSignup>
    </Flex>
    <Grid flexDirection={`row`}>
      <Box
        width={{ xs: 1, md: 1, lg: '50%' }}
        mr={{ xs: 0, md: 0, lg: 10 }}
        order={{ xs: 2, md: 2, lg: 1 }}
      >
        <h2>Latest</h2>
        <ArticleList as="ul" flexDirection={`column`}>
          <ArticleListItem
            title={`Scientists Create Airplane That Can Land Itself on Any Runway`}
            summary={`Last week I was blogging about simple stuff with Brigade event
                  driven automation platform. Basically we did nothing similar
                  to real-life…`}
            link={''}
            linkAs={Link}
            previewImageUrl={`https://picsum.photos/150/150?random=7`}
            publishedAt={`2019-07-09 10:00:00`}
            author={{ firstName: 'Ryan', lastName: 'Whitwam' }}
          />
          <ArticleListItem
            title={`Scientists Create Airplane That Can Land Itself on Any Runway`}
            summary={`Last week I was blogging about simple stuff with Brigade event
                  driven automation platform. Basically we did nothing similar
                  to real-life…`}
            link={''}
            linkAs={Link}
            previewImageUrl={`https://picsum.photos/150/150?random=7`}
            publishedAt={`2019-07-09 10:00:00`}
            author={{ firstName: 'Ryan', lastName: 'Whitwam' }}
          />
          <ArticleListItem
            title={`Scientists Create Airplane That Can Land Itself on Any Runway`}
            summary={`Last week I was blogging about simple stuff with Brigade event
                  driven automation platform. Basically we did nothing similar
                  to real-life…`}
            link={''}
            linkAs={Link}
            previewImageUrl={`https://picsum.photos/150/150?random=7`}
            publishedAt={`2019-07-09 10:00:00`}
            author={{ firstName: 'Ryan', lastName: 'Whitwam' }}
          />
          <ArticleListItem
            title={`Scientists Create Airplane That Can Land Itself on Any Runway`}
            summary={`Last week I was blogging about simple stuff with Brigade event
                  driven automation platform. Basically we did nothing similar
                  to real-life…`}
            link={''}
            linkAs={Link}
            previewImageUrl={`https://picsum.photos/150/150?random=7`}
            publishedAt={`2019-07-09 10:00:00`}
            author={{ firstName: 'Ryan', lastName: 'Whitwam' }}
          />
          <ArticleListItem
            title={`Scientists Create Airplane That Can Land Itself on Any Runway`}
            summary={`Last week I was blogging about simple stuff with Brigade event
                  driven automation platform. Basically we did nothing similar
                  to real-life…`}
            link={''}
            linkAs={Link}
            previewImageUrl={`https://picsum.photos/150/150?random=7`}
            publishedAt={`2019-07-09 10:00:00`}
            author={{ firstName: 'Ryan', lastName: 'Whitwam' }}
          />
          <ArticleListItem
            title={`Scientists Create Airplane That Can Land Itself on Any Runway`}
            summary={`Last week I was blogging about simple stuff with Brigade event
                  driven automation platform. Basically we did nothing similar
                  to real-life…`}
            link={''}
            linkAs={Link}
            previewImageUrl={`https://picsum.photos/150/150?random=7`}
            publishedAt={`2019-07-09 10:00:00`}
            author={{ firstName: 'Ryan', lastName: 'Whitwam' }}
          />
          <ArticleListItem
            title={`Scientists Create Airplane That Can Land Itself on Any Runway`}
            summary={`Last week I was blogging about simple stuff with Brigade event
                  driven automation platform. Basically we did nothing similar
                  to real-life…`}
            link={''}
            linkAs={Link}
            previewImageUrl={`https://picsum.photos/150/150?random=7`}
            publishedAt={`2019-07-09 10:00:00`}
            author={{ firstName: 'Ryan', lastName: 'Whitwam' }}
          />
        </ArticleList>
      </Box>
      <Box
        width={{ xs: 1, md: 1, lg: '40%' }}
        pt={{ xs: 0, md: 0, lg: 6 }}
        order={{ xs: 1, md: 1, lg: 2 }}
      >
        <h2 style={{ fontSize: '22px' }}>Popular right now</h2>
        <MiniArticleList as="ul" flexDirection={`column`}>
          <ArticleListItem
            title={`Scientists Create Airplane That Can Land Itself on Any Runway`}
            link={''}
            linkAs={Link}
            previewImageUrl={`https://picsum.photos/150/150?random=7`}
            publishedAt={`2019-07-09 10:00:00`}
            author={{ firstName: 'Ryan', lastName: 'Whitwam' }}
            smallPreview
          />
          <ArticleListItem
            title={`Scientists Create Airplane That Can Land Itself on Any Runway`}
            link={''}
            linkAs={Link}
            previewImageUrl={`https://picsum.photos/150/150?random=7`}
            publishedAt={`2019-07-09 10:00:00`}
            author={{ firstName: 'Ryan', lastName: 'Whitwam' }}
            smallPreview
          />
          <ArticleListItem
            title={`Scientists Create Airplane That Can Land Itself on Any Runway`}
            link={''}
            linkAs={Link}
            previewImageUrl={`https://picsum.photos/150/150?random=7`}
            publishedAt={`2019-07-09 10:00:00`}
            author={{ firstName: 'Ryan', lastName: 'Whitwam' }}
            smallPreview
          />
        </MiniArticleList>
      </Box>
    </Grid>
  </StyledContainer>
)
