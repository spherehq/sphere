import { Command, flags } from '@oclif/command'
import { cli } from 'cli-ux'
import { prisma } from '@spherehq/database'

import * as EmailValidator from 'email-validator'
import * as inquirer from 'inquirer'

const slugify = require('@sindresorhus/slugify')

const captureData = async (): Promise<{
  alias: string
  firstName: string
  lastName: string
  emailAddress: string
}> => {
  const { alias, firstName, lastName, emailAddress } = await inquirer.prompt([
    {
      name: 'alias',
      message: `What would you like your sphere alias to be? We'll use this to create a unique space for you and your content.`,
      type: 'input',
      validate: async input => {
        return (await prisma.$exists.sphere({ alias: slugify(input) }))
          ? `Unfortunately ${input} is not available`
          : true
      },
    },
    {
      name: 'firstName',
      message: 'What is your first name?',
      type: 'input',
    },
    {
      name: 'lastName',
      message: 'What is your last name?',
      type: 'input',
    },
    {
      name: 'emailAddress',
      message: 'What is your email address?',
      type: 'input',
      validate: async input => {
        const isValid = EmailValidator.validate(input)
        return isValid
          ? isValid
          : `${input} does not appear to be a valid email address`
      },
    },
  ])

  return { alias, firstName, lastName, emailAddress }
}

const confirmDataEntry = async (): Promise<{
  alias: string
  firstName: string
  lastName: string
  emailAddress: string
}> => {
  const data = await captureData()

  cli.table([data], {
    alias: { header: 'Alias', get: row => row.alias },
    name: { header: 'Name', get: row => `${row.firstName} ${row.lastName}` },
    emailAddress: { header: 'Email Address', get: row => row.emailAddress },
  })

  const { validateEntry } = await inquirer.prompt([
    {
      name: 'validateEntry',
      message: `You happy with the details you've entered?`,
      type: 'confirm',
    },
  ])

  if (!validateEntry) return confirmDataEntry()

  return data
}

export default class Sync extends Command {
  static description = 'Initialize your sphere'

  static examples = [`$ sphere init`]

  static flags = {
    help: flags.help({ char: 'h' }),
    existing: flags.boolean({
      char: 'e',
      description: 'let us know if you have an existing sphere',
    }),
  }

  async run() {
    const { flags } = this.parse(Sync)

    if (flags.existing) {
      // Attempt to connect to an existing sphere
      const { confirm } = await inquirer.prompt([
        {
          name: 'confirm',
          message: 'Do you wish to connect an existing sphere?',
          type: 'confirm',
        },
      ])
      if (confirm) {
        const { alias, emailAddress } = await inquirer.prompt([
          {
            name: 'alias',
            message: `What is the alias of the sphere you wish to connect to?`,
            type: 'input',
            validate: async input => {
              return (await prisma.$exists.sphere({ alias: slugify(input) }))
                ? `Unfortunately ${input} does not exist`
                : true
            },
          },
          {
            name: 'emailAddress',
            message: `What is the email address you used to create the sphere?`,
            type: 'input',
            validate: async input => {
              return (await prisma.$exists.account({ emailAddress: input }))
                ? `Unfortunately ${input} does not exist`
                : true
            },
            when: async answers => answers['alias'],
          },
        ])
        console.log(alias, emailAddress)
      }
    } else {
      // Create a new sphere
      const { confirm } = await inquirer.prompt([
        {
          name: 'confirm',
          message: 'Do you wish to create a new sphere?',
          type: 'confirm',
        },
      ])

      if (confirm) {
        const {
          alias,
          firstName,
          lastName,
          emailAddress,
        } = await confirmDataEntry()
        cli.action.start(`Creating sphere with alias of ${alias}`)
        try {
          const { slugPrefix } = await prisma.createSphere({
            alias: slugify(alias),
            associatedWith: { create: { firstName, lastName, emailAddress } },
          })

          cli.action.stop()

          this.log(
            `Successfully created new sphere: https://sphere.sh/${slugPrefix}${alias}`,
          )
        } catch (error) {
          this.error(error)
        }
      }
    }
  }
}
