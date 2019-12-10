# standard-version-updater-yaml

[![Latest release](https://img.shields.io/github/v/release/coldfrontlabs/standard-version-updater-yaml?include_prereleases&style=for-the-badge)](https://github.com/coldfrontlabs/standard-version-updater-yaml/releases)
[![License](https://img.shields.io/github/license/coldfrontlabs/standard-version-updater-yaml?style=for-the-badge)](/LICENSE)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=for-the-badge)](https://conventionalcommits.org)

A YAML updater for [standard-version](https://github.com/conventional-changelog/standard-version).

## Installation

```shell
# latest stable
npm install standard-version-updater-yaml
```

## Usage

In your `.versionrc.js` file:

```jsx
const standardVersionUpdaterYaml = require("standard-version-updater-yaml");

module.exports = {
  ...,
  bumpFiles: [
    {
      filename: "file.yml",
      updater: standardVersionUpdaterYaml
    }
  ]
};
```

\- _or_ -

```jsx
module.exports = {
  ...,
  bumpFiles: [
    {
      filename: "file.yml",
      updater: require("standard-version-updater-yaml")
    }
  ]
};
```

## Versioning

This project uses Semantic Versioning 2.0.0 to keep track of releases.

For more detailed information about SemVer, please see the [official documentation](https://semver.org/).

## Contributing

If you're interested in contributing to the project, please read the [Contribution Guidelines](.github/CONTRIBUTING.md). Any and all contributions _must_ follow these guidelines or they will not be accepted.
