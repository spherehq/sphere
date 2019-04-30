<img src="./sphere-logo.png">

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) [![Maintainability](https://api.codeclimate.com/v1/badges/a88399d1da7c5697b4c7/maintainability)](https://codeclimate.com/github/spherehq/sphere/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/a88399d1da7c5697b4c7/test_coverage)](https://codeclimate.com/github/spherehq/sphere/test_coverage)[![CircleCI](https://circleci.com/gh/spherehq/sphere.svg?style=svg)](https://circleci.com/gh/spherehq/sphere)

 <h3 align="center">where communities gather around content</h3>

This is the main monorepo codebase of [Sphere.sh](https://sphere.sh). We use [lerna](https://github.com/lerna/lerna) to manage and release packages.

## Getting started

Sphere is node and typescript based, so ensure you have the latest version of node installed. A `.nvmrc` file is present in each package directory and root, if you have nvm installed you can run `nvm use` and it will set the right version for you.

We also prefer yarn over npm, primarily as we use yarn workspaces.

Ensure you have the latest version of yarn installed and run `yarn install` this will install all necessary dependencies.

### Commands

Some helpful commands you should know when working within our codebase.

| Command                 | Description                                |
| ----------------------- | ------------------------------------------ |
| `yarn start`            | Starts platform and api local dev servers  |
| `yarn build`            | Builds packages - platform and api         |
| `yarn lint`             | Lints all packages using tslint            |
| `yarn test`             | Runs all tests                             |
| `yarn test:changed`     | Runs tests on packages with changes only   |
| `yarn test:unit:update` | Updates all unit tests which use snapshots |

Most commands use lerna scope to run against local package commands `--scope='@spherehq/*`

Packages will have commands which are local to them and can be found within their own respective package READMEs.

### Considerations for working within our monorepo

Always try to work from the root directory when running lerna commands e.g. `lerna add` or `leran publish`.

We also use [yarn](https://yarnpkg.com/lang/en/) workspaces - this allows us to leverage lerna and yarn's ability to link sibling packages together and symlink their source to create a streamlined developer experience.

## Deployment and package releases

We use lerna's `--conventional-commits` option and follow the semver convention. All releases are managed via our CI which looks for changes across packages and releases changed packages.

Some packages such as `platform`, `api` and `database` are/require servers which need additional steps such as building docker images or deploying to Amazon services.

You can understand more about our CI/CD process by viewing the [config file](.circleci/config.yml)

## Contributing

Thanks for your interest in contributing! Read up on our guidelines for contributing and then look through our issues with a `help wanted` label.

We use husky and prettier to keep our code styles consistent, write code how you like just know we'll format it for you later.
