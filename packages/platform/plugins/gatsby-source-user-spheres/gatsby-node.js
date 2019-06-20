const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      sphere {
        posts(where: { status: PUBLISHED }) {
          slug
          associatedWith {
            alias
            slugPrefix
          }
        }
        spheres {
          alias
          slugPrefix
        }
      }
    }
  `).then(result => {
    result.data.sphere.posts.forEach(post => {
      createPage({
        path: `${post.associatedWith.slugPrefix}${post.slug}`,
        component: path.resolve(`${__dirname}/templates/post.tsx`),
        context: {
          slug: post.slug,
        },
      })
    })

    result.data.sphere.spheres.forEach(sphere => {
      createPage({
        path: `${sphere.slugPrefix}${sphere.alias}`,
        component: path.resolve(`${__dirname}/templates/profile.tsx`),
        context: {
          alias: sphere.alias,
        },
      })
    })
  })
}
