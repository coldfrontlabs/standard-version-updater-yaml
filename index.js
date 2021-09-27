const yaml = require("yaml");

// Get the current version in the yaml file.
module.exports.readVersion = (contents) => yaml.parse(contents, "utf8").version;

// Update the version in the yaml file.
module.exports.writeVersion = (contents, version) => {
  const yamlFile = yaml.parse(contents, "utf8");
  yamlFile.version = version;
  return yaml.stringify(yamlFile, "utf8");
};
