import { Hook } from '@oclif/config'
import { CLIError } from '@oclif/errors'
import { prisma } from '@spherehq/database'

import * as inquirer from 'inquirer'
import * as path from 'path'
import * as fs from 'fs-extra'

enum commands {
  INIT = 'init',
  SYNC = 'sync',
}

const configFilename = `config.json`

const hook: Hook<'init'> = async function(options) {
  // Check for presence of config.json file
  if (!fs.existsSync(path.join(options.config.configDir, configFilename))) {
    switch (options.id) {
      case commands.SYNC:
        throw new CLIError(
          `Unable to find config, ensure you've created a sphere by running "sphere init"`,
        )
    }
  } else {
    // confirm config alias exists
    const { alias } = fs.readJSONSync(
      path.join(this.config.configDir, `config.json`),
    )
    try {
      const exists = await prisma.$exists.sphere({ alias })

      switch (options.id) {
        case commands.INIT:
          // if it exists warn we may override existing config
          if (exists) {
            const { decision } = await inquirer.prompt([
              {
                name: 'decision',
                message:
                  'We have detected an existing instance of sphere, do you wish to continue?',
                type: 'list',
                default: false,
                choices: [
                  { name: 'yes', value: true },
                  { name: 'no', value: false },
                ],
              },
            ])

            if (!decision) {
              this.exit()
            }
          }
      }
    } catch (error) {
      this.error(error)
    }
  }
}

export default hook
