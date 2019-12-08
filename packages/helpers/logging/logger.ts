import winston from 'winston'
import { Timber } from '@timberio/node'
import { TimberTransport } from '@timberio/winston'

const timber = new Timber(
  '29761',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2FwaS50aW1iZXIuaW8vIiwiZXhwIjpudWxsLCJpYXQiOjE1NzU4MTA3NjMsImlzcyI6Imh0dHBzOi8vYXBpLnRpbWJlci5pby9hcGlfa2V5cyIsInByb3ZpZGVyX2NsYWltcyI6eyJhcGlfa2V5X2lkIjo1NjA0LCJ1c2VyX2lkIjoiYXBpX2tleXw1NjA0In0sInN1YiI6ImFwaV9rZXl8NTYwNCJ9.JSArqe3_v0yuSFmoHGfWL6_CejadsFsZzDmW1QLa9pQ',
)

export const logger = winston.createLogger({
  transports: [new TimberTransport(timber)],
})
