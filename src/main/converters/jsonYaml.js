import { dump, load } from 'js-yaml'

/**
 * Convert JSON to YAML
 *
 * @param {string} jsonText
 * @return {string}
 */
function jsonToYaml(jsonText) {
  let yaml
  try {
    yaml = dump(JSON.parse(jsonText))
  } catch (Error) {
    yaml = ''
  }
  return yaml
}

/**
 * Convert YAML to JSON
 *
 * @param {string} yamlText
 * @return {string}
 */
function yamlToJson(yamlText) {
  return JSON.stringify(load(yamlText), null, 2)
}

export { jsonToYaml, yamlToJson }
