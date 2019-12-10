import * as winston from 'winston'
import { Timber } from '@timberio/node'
import { TimberTransport } from '@timberio/winston'

export const logger = (apiKey: string, sourceKey: string) => {
  const timber = new Timber(apiKey, sourceKey, { ignoreExceptions: false })
  return winston.createLogger({
    transports: [new TimberTransport(timber)],
  })
}
