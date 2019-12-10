# Sphere Helpers

A collection of helpers

## Logging

We use [winston](https://github.com/winstonjs/winston) for logging and transporters for `stdout` and [timber.io](https://timber.io)

You'll require an `apiKey` and a unique `sourceKey` for each instance of logger.

```
import { logger as Logger } from '@spherehq/helpers'

const logger = Logger('apiKey', 'sourceKey')

logger.log('info', 'log message')
```
