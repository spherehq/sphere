import {
  VerifySphereInput,
  VerifySphereError,
  SphereVerificationCodeStatus,
} from '../../../../types'
import { ServerContext } from '../../../../server'

export const VerifySphereResolver = async (
  _,
  args: { input: VerifySphereInput },
  context: ServerContext,
) => {
  try {
    if (
      !(await context.db.$exists.sphereVerificationCode({
        value: args.input.code,
      }))
    ) {
      throw new Error(VerifySphereError.UnknownCode)
    }

    const account = await context.db
      .sphereVerificationCode({
        value: args.input.code,
      })
      .associatedWith()

    if (context.account && account.id !== context.account.id) {
      throw new Error(VerifySphereError.InvalidAccountAndCodePair)
    }

    const code = await context.db.sphereVerificationCode({
      value: args.input.code,
    })

    if (code && code.status === SphereVerificationCodeStatus.Claimed) {
      throw new Error(VerifySphereError.AlreadyClaimed)
    }

    if (code) {
      await context.db.updateSphereVerificationCode({
        data: { status: SphereVerificationCodeStatus.Claimed },
        where: { id: code.id },
      })
    }
  } catch (e) {
    switch (e.message) {
      case VerifySphereError.UnknownCode:
        return { error: VerifySphereError.UnknownCode }
      case VerifySphereError.InvalidAccountAndCodePair:
        return { error: VerifySphereError.InvalidAccountAndCodePair }
      case VerifySphereError.AlreadyClaimed:
        return { error: VerifySphereError.AlreadyClaimed }
    }
  }

  return { error: null }
}
