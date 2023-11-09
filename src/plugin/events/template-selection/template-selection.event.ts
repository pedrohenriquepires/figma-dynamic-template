import { emit, once } from '@create-figma-plugin/utilities'
import { TemplateMissingError } from '~/plugin/errors/template-missing'
import { getTemplate } from '~/plugin/utils/get-template'
import { GetSelectionHandler, SetSelectionHandler } from './template-selection.types'
import { getTemplateProperties } from './utils/get-template-properties'

const emitSetSelection = () => {
  try {
    const template = getTemplate()
    const properties = template ? getTemplateProperties(template) : []

    emit<SetSelectionHandler>('SET_SELECTION', {
      template,
      properties,
    })
  } catch (err) {
    if (err instanceof TemplateMissingError) {
      emit<SetSelectionHandler>('SET_SELECTION', {
        template: null,
        properties: [],
      })
    }
  }
}

export const setupTemplateSelectionEventListener = () => {
  once<GetSelectionHandler>('GET_SELECTION', emitSetSelection)
  figma.on('selectionchange', emitSetSelection)
}
