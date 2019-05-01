const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/pages/**" } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/default.tsx`),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}

// exports.createPagesStatefully = async ({ actions }, _, done) => {
//   if (process.env.NODE_ENV !== `production`) {
//     const { createPage } = actions

//     createPage({
//       component: path.resolve(`./src/pages/404.tsx`),
//       path: `/dev-404-page/`,
//     })
//   }

//   done()
// }

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-loading-skeleton/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
