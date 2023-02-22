import { TemplateType } from '~/@types/selection'
import { getNode } from './get-node'

export const repositionAndRenameNode = (node: ReturnType<typeof getNode>, template: TemplateType, key: number) => {
  node.name = `${node.name} Copy ${key + 1}`
  node.y = getYPosition(template, key)
  node.x = template.x
}

export const getYPosition = ({ y, height }: TemplateType, key: number) => y + (height + 40) * (key + 1)
