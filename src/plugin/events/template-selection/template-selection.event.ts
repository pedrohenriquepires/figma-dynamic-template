import { emit } from '@create-figma-plugin/utilities'
import { TemplateMissingError } from '~/plugin/errors/template-missing'
import { getTemplate } from '~/plugin/utils/get-template'
import { GetSelectionHandler } from './template-selection.types'
import { getTemplateProperties } from './utils/get-template-properties'

const emitGetSelection = () => {
  try {
    const template = getTemplate()
    const properties = template ? getTemplateProperties(template) : []

    emit<GetSelectionHandler>('GET_SELECTION', {
      template,
      properties,
    })
  } catch (err) {
    if (err instanceof TemplateMissingError) {
      emit<GetSelectionHandler>('GET_SELECTION', {
        template: null,
        properties: [],
      })
    }
  }
}

export const setupTemplateSelectionEventListener = () => {
  emitGetSelection()
  figma.on('selectionchange', emitGetSelection)
}
