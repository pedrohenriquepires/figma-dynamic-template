import { TemplateType } from "~/@types/selection"
import { isTextNode } from "~/plugin/utils/is-text-node"

const PROPERTIES_REGEX = /{([a-zA-Z0-9]*)}/g

export const getTemplateProperties = (template: TemplateType) => {
  return template
    .findAll(n => isTextNode(n) && /^{.*}$/.test(n.characters))
    .map(n => extractPropertiesFromString((n as TextNode).characters))
    .flat()
}

const extractPropertiesFromString = (str: string) => {
  const result = []
  const matches = str.matchAll(PROPERTIES_REGEX)

  for (const [, property] of matches) {
    result.push(property)
  }

  return result
}