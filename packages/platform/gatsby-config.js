require('dotenv').config()

const pkg = require('./package.json')
const path = require('path')
const { NODE_ENV } = process.env

const faviconSelector = env =>
  env === 'production'
    ? './src/images/sphere-icon.png'
    : env === 'staging'
    ? './src/images/sphere-icon-staging.png'
    : './src/images/sphere-icon-development.png'

const manifestColorSelector = env =>
  env === 'production' ? '#fafafa' : env === 'staging' ? '#00a7e1' : '#f2b830'

const baseConfig = {
  siteMetadata: {
    title: 'Sphere - where communities gather around content',
    description:
      'We help you create a community around your content, a dedicated space for you to express ideas and share with others.',
    siteUrl: 'https://sphere.sh',
    version: `${pkg.version}`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    //'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NODE_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/pages/markdown`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: `>`,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Sphere',
        short_name: 'Sphere',
        start_url: '/',
        background_color: manifestColorSelector(NODE_ENV),
        theme_color: manifestColorSelector(NODE_ENV),
        display: 'minimal-ui',
        icon: faviconSelector(NODE_ENV), // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Titillium+Web`,
            variants: [`400`, `400i`, `600`, `600i`, `700`, `700i`],
          },
        ],
      },
    },
    'gatsby-plugin-playground',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-54855935-4',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: '@spherehq/gatsby-theme-spheres',
    },
  ],
}

module.exports = baseConfig
