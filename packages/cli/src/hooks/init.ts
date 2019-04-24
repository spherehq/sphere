import { Hook } from '@oclif/config'
import { CLIError } from '@oclif/errors'

import * as inquirer from 'inquirer'
import * as path from 'path'
import * as fs from 'fs'

enum commands {
  INIT = 'init',
  SYNC = 'sync',
}

const configFilename = `.sphererc`

const hook: Hook<'init'> = async function(options) {
  // Check for presence of .sphererc file
  if (fs.existsSync(path.join(options.config.configDir, configFilename))) {
    switch (options.id) {
      case commands.SYNC:
        throw new CLIError(
          `Unable to find config, ensure you've init sphere by running "sphere init"`,
        )
    }
  } else {
    switch (options.id) {
      case commands.INIT:
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
}

export default hook
