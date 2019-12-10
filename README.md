# standard-version-updater-yaml

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
