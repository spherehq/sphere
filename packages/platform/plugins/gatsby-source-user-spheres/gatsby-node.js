const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      sphere {
        posts(where: { status: DRAFT }) {
          slug
        }
      }
    }
  `).then(result => {
    result.data.sphere.posts.forEach(post => {
      createPage({
        path: `~spherehq/${post.slug}`,
        component: path.resolve(`${__dirname}/templates/default.tsx`),
        context: {
          slug: post.slug,
        },
      })
    })
  })
}
