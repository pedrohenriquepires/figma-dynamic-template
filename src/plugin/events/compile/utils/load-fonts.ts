import { loadFontsAsync } from "@create-figma-plugin/utilities"
import { TemplateType } from "~/@types/selection"
import { isTextNode } from "~/plugin/utils/is-text-node"

export const loadFonts = (properties: string[], template: TemplateType) => {
  return Promise.all(properties.map(prop => {
    const text = template.findOne(c => isTextNode(c) && c.characters.includes(`{${prop}}`)) as TextNode
    return loadFontsAsync([text])
  }))
}