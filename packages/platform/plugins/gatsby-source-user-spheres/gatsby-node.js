const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/spheres/**" } }
      ) {
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
