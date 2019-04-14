import { Command, flags } from '@oclif/command'

export default class Sync extends Command {
  static description = "Synchronize your sphere's content with local copies"

  static examples = [`$ sphere sync example.md`]

  static flags = {
    help: flags.help({ char: 'h' }),
    force: flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args, flags } = this.parse(Sync)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
