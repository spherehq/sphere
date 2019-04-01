require('dotenv').config()

const path = require('path')
const { NODE_ENV } = process.env

const faviconSelector = env =>
  env === 'production'
    ? 'src/images/sphere-icon.png'
    : env === 'staging'
    ? 'src/images/sphere-icon.png'
    : 'src/images/sphere-icon.png'

const manifestColorSelector = env =>
  env === 'production' ? '#111' : env === 'staging' ? '#111' : '#111'

const baseConfig = {
  siteMetadata: {
    title: '',
    description: '',
    keywords: '',
    siteUrl: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
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
  ],
}

module.exports = baseConfig
