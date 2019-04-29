const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      sphere {
        posts(where: { status: DRAFT }) {
          slug
          associatedWith {
            alias
            slugPrefix
          }
        }
      }
    }
  `).then(result => {
    result.data.sphere.posts.forEach(post => {
      createPage({
        path: `${post.associatedWith.slugPrefix}${post.slug}`,
        component: path.resolve(`${__dirname}/templates/default.tsx`),
        context: {
          slug: post.slug,
        },
      })
    })
  })
}
