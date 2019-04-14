## Sphere CLI

Command line tool for managing your sphere

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @spherehq/cli
$ sphere COMMAND
running command...
$ sphere (-v|--version|version)
@spherehq/cli/0.3.2 linux-x64 node-v11.14.0
$ sphere --help [COMMAND]
USAGE
  $ sphere COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`sphere help [COMMAND]`](#sphere-help-command)
* [`sphere sync [FILE]`](#sphere-sync-file)

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

## `sphere sync [FILE]`

Synchronize your sphere's content with local copies

```
USAGE
  $ sphere sync [FILE]

OPTIONS
  -f, --force
  -h, --help               show CLI help
  -p, --basePath=basePath

EXAMPLE
  $ sphere sync example.md
```
<!-- commandsstop -->
