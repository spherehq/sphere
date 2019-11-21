import * as AWS from 'aws-sdk'
import * as uuid from 'uuid/v1'

import fileTypeStream from 'file-type-stream'

import { Prisma } from '@spherehq/database'
import { PassThrough } from 'stream'

export const MediaResolver = async (
  _: any,
  args: any,
  context: { db: Prisma },
) => {
  AWS.config.update({
    credentials: new AWS.Credentials('', ''),
  })

  const s3 = new AWS.S3()
  const Body = new PassThrough()
  const { createReadStream } = await args.file
  const { mime, ext } = (await new Promise(resolve => {
    createReadStream()
      .pipe(fileTypeStream(resolve))
      .pipe(Body)
  })) as { mime: string; ext: string }

  const result = await s3
    .upload({
      Body,
      Bucket: 'sh.sphere.media',
      ACL: 'public-read',
      Key: `${uuid()}.${ext}`,
      ContentType: mime,
      ContentEncoding: 'utf8',
    })
    .promise()

  return await context.db.createMedia({ url: result.Location })
}
