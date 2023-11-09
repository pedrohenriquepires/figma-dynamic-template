import { emit, on } from "@create-figma-plugin/utilities"
import { useEffect, useState } from 'react'
import { TemplateType } from '~/@types/selection'
import { GetSelectionHandler, SetSelectionHandler } from '~/plugin/events/template-selection/template-selection.types'
import { useGlobalTemplateProperties } from '../providers'

export const useTemplateSelection = () => {
  const [selection, setSelection] = useState<TemplateType | null>()
  const [properties, setProperties] = useGlobalTemplateProperties()

  useEffect(() => {
    emit<GetSelectionHandler>('GET_SELECTION')

    on<SetSelectionHandler>('SET_SELECTION', ({ properties, template }) => {
      setSelection(template)
      setProperties(properties)
    })
  }, [])

  return {
    selection,
    properties
  }
}