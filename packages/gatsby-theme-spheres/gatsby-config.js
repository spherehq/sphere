require('dotenv').config()

const path = require('path')
const { SPHERE_GRAPHQL_ENDPOINT } = process.env

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'Sphere',
        fieldName: 'sphere',
        url: SPHERE_GRAPHQL_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.join(__dirname, `src`, `pages`),
      },
    },
  ],
}
