const yaml = require("yaml");

module.exports.readVersion = contents => yaml.parse(contents, "utf8").version;

module.exports.writeVersion = (contents, version) => {
  const yamlFile = yaml.parse(contents, "utf8");
  yamlFile.version = version;
  return yaml.stringify(yamlFile, "utf8");
};
