import { NodeType } from '~/@types/selection'
import { isTextNode } from '~/plugin/utils/is-text-node'

export const replaceVariablesOnNode = (item: object, properties: string[], node: NodeType) => {
  properties.forEach((prop: string) => {
    const text = node.findOne(c => isTextNode(c) && c.characters.includes(`{${prop}}`)) as TextNode
    text.characters = text.characters.replace(new RegExp(`{${prop}}`, 'g'), String(item[prop as keyof typeof item]))
  })
}
