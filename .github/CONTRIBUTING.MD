# Contributing

Thanks for your interest in contributing! :tada:


## Contributing Etiquette

Please see our [Contributor Code of Conduct](https://www.sphere.sh/code-of-conduct).


## Creating an Issue

* It is required that you clearly describe the steps necessary to reproduce the issue you are running into. Although we would love to help our users as much as possible, diagnosing issues without clear reproduction steps is extremely time-consuming and simply not sustainable.

* The issue list of this repository is exclusively for bug reports and feature requests. Non-conforming issues will be closed immediately.

* Issues with no clear steps to reproduce will not be triaged. 

* If you think you have found a bug, or have a new feature idea, please start by making sure it hasn't already been [reported](https://github.com/spherehq/sphere/issues?utf8=%E2%9C%93&q=is%3Aissue). You can search through existing issues to see if there is a similar one reported. Include closed issues as it may have been closed with a solution.

* Next, [create a new issue](https://github.com/spherehq/sphere/issues/new/choose) that thoroughly explains the problem. Please fill out the populated issue form before submitting the issue.


## Creating a Pull Request

* We appreciate you taking the time to contribute! Before submitting a pull request, we ask that you please [create an issue](#creating-an-issue) that explains the bug or feature request and let us know that you plan on creating a pull request for it. If an issue already exists, please comment on that issue letting us know you would like to submit a pull request for it. This helps us to keep track of the pull request and make sure there isn't duplicated effort.

* Looking for an issue to fix? Make sure to look through our issues with the [help wanted](https://github.com/spherehq/sphere/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) label!


### Setup

1. [Download the installer](https://nodejs.org/) for the LTS version of Node.js. This is the best way to also [install npm](https://blog.npmjs.org/post/85484771375/how-to-install-npm#_=_).
2. Fork this repository.
3. Clone your fork.
4. Create a new branch from master for your change.
5. Navigate into the directory of the package you wish to modify.
6. Run `npm install` to install dependencies for this package.
7. Follow the steps for the specific package below.

### Submit Pull Request

1. [Create a new pull request](https://github.com/spherehq/sphere/compare) with the `master` branch as the `base`. You may need to click on `compare across forks` to find your changes.
2. See the [Creating a pull request from a fork](https://help.github.com/articles/creating-a-pull-request-from-a-fork/) GitHub help article for more information.
3. Please fill out the provided Pull Request template to the best of your ability and include any issues that are related.

## Commit Message Format

We have very precise rules over how our git commit messages should be formatted. This leads to readable messages that are easy to follow when looking through the project history. We also use the git commit messages to generate our [changelog](https://github.com/spherehq/sphere/blob/master/CHANGELOG.md). (Ok you got us, it's basically Angular's commit message format).

`type(scope): subject`

#### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

#### Scope
The scope can be anything specifying place of the commit change. For example `action-sheet`, `button`, `menu`, `nav`, etc. If you make multiple commits for the same component, please keep the naming of this component consistent. For example, if you make a change to navigation and the first commit is `fix(nav)`, you should continue to use `nav` for any more commits related to navigation.

#### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* do not capitalize first letter
* do not place a period `.` at the end
* entire length of the commit message must not go over 50 characters
* describe what the commit does, not what issue it relates to or fixes
* **be brief, yet descriptive** - we should have a good understanding of what the commit does by reading the subject


## License

By contributing your code to the spherehq/sphere GitHub Repository, you agree to license your contribution under the MIT license.
