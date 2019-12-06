import fetch from 'node-fetch'

import * as urlSlug from 'url-slug'
import * as https from 'https'

import { APIGatewayEvent, Handler } from 'aws-lambda'

import {
  SphereVerificationStatus,
  POST_STATUS,
  prisma,
} from '../generated/prisma-client'

export const verifySphere: Handler = async (event: APIGatewayEvent) => {
  const verificationRule = () => {
    const rules = {
      verification: [
        ({ htmlDom: $ }) => {
          return $('meta[name="sphere-source-verification"]').attr('content')
        },
      ],
    }
    return rules
  }

  const metascraper = require('metascraper')([
    require('metascraper-author')(),
    require('metascraper-date')(),
    require('metascraper-description')(),
    require('metascraper-image')(),
    require('metascraper-logo')(),
    require('metascraper-clearbit')(),
    require('metascraper-publisher')(),
    require('metascraper-title')(),
    require('metascraper-url')(),
    verificationRule(),
  ])

  const data = JSON.parse(event.body || '').data as {
    sphereVerification: {
      node: {
        id: string
        url: string
        status: SphereVerificationStatus
        code: {
          value: string
          associatedWith: {
            id: string
          }
        }
      }
    }
  }

  const status = await prisma
    .sphereVerification({ id: data.sphereVerification.node.id })
    .status()

  if (status !== 'AWAITING_VERIFICATION') {
    console.warn(
      `Sphere verification request with id ${data.sphereVerification.node.id} and status ${status} cannot be used for verification`,
    )
    return { statusCode: 400 }
  }

  const res = await fetch(data.sphereVerification.node.url, {
    agent: new https.Agent({ rejectUnauthorized: false }),
  })
  const html = await res.text()
  const metadata = (await metascraper({
    html,
    url: data.sphereVerification.node.url,
  })) as {
    title: string
    description: string
    author: string
    publisher: string
    url: string
    logo: string
    image: string
    date: string
    verification: string
  }

  if (metadata.verification !== data.sphereVerification.node.code.value) {
    console.warn(
      `Sphere verification code ${data.sphereVerification.node.code.value} was not found for url: ${data.sphereVerification.node.url}`,
    )
    return { statusCode: 200 }
  }

  const account = await prisma.account({
    id: data.sphereVerification.node.code.associatedWith.id,
  })

  const parseDomain = require('parse-domain')
  const { domain, tld } = parseDomain(data.sphereVerification.node.url)
  const slug = urlSlug(`${domain}.${tld}`)

  try {
    const post = () => {
      return {
        title: metadata.title,
        slug: `${slug}/${urlSlug(metadata.title)}`,
        featuredImage: metadata.image,
        author: metadata.author,
        status: 'PUBLISHED' as POST_STATUS,
        url: data.sphereVerification.node.url,
      }
    }

    if (account) {
      const sphereId = await prisma
        .upsertSphere({
          where: { alias: slug },
          create: {
            alias: slug,
            aliasSlug: slug,
            associatedWith: { connect: { id: account.id } },
            verifiedBy: {
              connect: { id: data.sphereVerification.node.id },
            },
            posts: {
              create: post(),
            },
          },
          update: {},
        })
        .id()

      await prisma.upsertPost({
        where: { url: data.sphereVerification.node.url },
        create: { ...post(), associatedWith: { connect: { id: sphereId } } },
        update: { ...post() },
      })
    }

    await prisma.updateSphereVerification({
      where: { id: data.sphereVerification.node.id },
      data: { status: 'VERIFIED' },
    })
  } catch (e) {
    console.error(e.message)
    return { statusCode: 500, message: e.message }
  }

  return { metadata, statusCode: 200 }
}
