import { TemplateType } from '~/@types/selection'
import { TemplateMissingError } from '~/plugin/errors/template-missing'

export const getTemplate = () => {
  const [template] = figma.currentPage.selection

  if (!template || !templateTypeGuard(template)) {
    throw new TemplateMissingError()
  }

  return template as TemplateType
}

const templateTypeGuard = (template: SceneNode) => {
  return ['FRAME', 'COMPONENT', 'GROUP'].includes(template.type)
}
