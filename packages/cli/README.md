## Sphere CLI

Command line tool for managing your sphere

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
  <!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g @spherehq/cli
$ sphere COMMAND
running command...
$ sphere (-v|--version|version)
@spherehq/cli/0.0.0 darwin-x64 node-v10.2.1
$ sphere --help [COMMAND]
USAGE
  $ sphere COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`sphere hello [FILE]`](#sphere-hello-file)
- [`sphere help [COMMAND]`](#sphere-help-command)

## `sphere hello [FILE]`

describe the command here

```
USAGE
  $ sphere hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ sphere hello
  hello world from ./src/hello.ts!
```

_See code: [lib/commands/hello.js](https://github.com/spherehq/sphere/blob/v0.0.0/lib/commands/hello.js)_

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

<!-- commandsstop -->
