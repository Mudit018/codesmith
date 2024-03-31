const yaml = require('js-yaml')

/**
 * Convert JSON to YAML
 *
 * @param {string} jsonText
 * @return {string}
 */
function jsonToYaml(jsonText) {
  return yaml.dump(JSON.parse(jsonText))
}

/**
 * Convert YAML to JSON
 *
 * @param {string} yamlText
 * @return {string}
 */
function yamlToJson(yamlText) {
  return JSON.stringify(yaml.load(yamlText), null, 2)
}

export { jsonToYaml, yamlToJson }
