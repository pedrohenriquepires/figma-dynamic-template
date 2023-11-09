import { getTemplate } from '~/plugin/utils/get-template'
import { getNode } from './utils/get-node'
import { getPropertiesFromList } from './utils/get-properties-from-list'
import { loadFonts } from './utils/load-fonts'
import { replaceVariablesOnNode } from './utils/replace-variables-on-node'
import { repositionAndRenameNode } from './utils/reposition-and-rename-node'

export const compileAction = async (list: object[]) => {
  const template = getTemplate()
  const properties = getPropertiesFromList(list)

  await loadFonts(properties, template)

  console.log(list)
  list.forEach((item, key) => {
    const node = getNode(template)

    replaceVariablesOnNode(item, properties, node)
    repositionAndRenameNode(node, template, key)
  })

  figma.closePlugin()
}
