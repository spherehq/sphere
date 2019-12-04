import { ServerContext } from '../../../../server'

export const GenerateVerificationCodeResolver = async (
  _,
  _args,
  context: ServerContext,
) => {
  const uuidv4 = require('uuid/v4')
  const accountId = (context.account && context.account.id) || ''
  const codes = await context.db.sphereVerificationCodes({
    where: {
      status: 'ISSUED',
      associatedWith: { id: accountId },
    },
    orderBy: 'issuedAt_ASC',
  })

  if (codes.length > 0) {
    const c = codes.shift()
    if (c) return { code: c.value }
  }

  const code = await context.db
    .createSphereVerificationCode({
      value: uuidv4(),
      associatedWith: { connect: { id: accountId } },
    })
    .value()
  return { code }
}
