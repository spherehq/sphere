<img src="../../sphere-logo.png">

Command line tool for managing your sphere

## Usage

<!-- usage -->

```sh-session
$ npm install -g @spherehq/cli
$ sphere COMMAND
running command...
$ sphere (-v|--version|version)
@spherehq/cli/0.6.1 darwin-x64 node-v10.2.1
$ sphere --help [COMMAND]
USAGE
  $ sphere COMMAND
...
```

<!-- usagestop -->

## Commands

<!-- commands -->

- [`sphere help [COMMAND]`](#sphere-help-command)
- [`sphere init`](#sphere-init)
- [`sphere sync [FILE]`](#sphere-sync-file)

## `sphere help [COMMAND]`

display help for sphere

```
USAGE
  $ sphere help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `sphere init`

Initialize your sphere

```
USAGE
  $ sphere init

OPTIONS
  -e, --existing  let us know if you have an existing sphere
  -h, --help      show CLI help

EXAMPLE
  $ sphere init
```

_See code: [lib/commands/init.js](https://github.com/spherehq/sphere/blob/v0.6.1/lib/commands/init.js)_

## `sphere sync [FILE]`

Synchronize your sphere's content with local copies

```
USAGE
  $ sphere sync [FILE]

OPTIONS
  -f, --force
  -h, --help               show CLI help
  -p, --basePath=basePath  specify path to sync local markdown files from

EXAMPLE
  $ sphere sync example.md
```

_See code: [lib/commands/sync.js](https://github.com/spherehq/sphere/blob/v0.6.1/lib/commands/sync.js)_

<!-- commandsstop -->

## Contributing

Thanks for your interest in contributing! Read up on our guidelines for contributing and then look through our issues with a `help wanted` and `package:cli` label.
