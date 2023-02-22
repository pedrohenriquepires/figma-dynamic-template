import { EventHandler } from "@create-figma-plugin/utilities"
import { TemplateType } from "~/@types/selection"

export type SelectionData = {
  template: TemplateType | null
  properties: string[]
}

export interface GetSelectionHandler extends EventHandler {
  name: 'GET_SELECTION'
  handler: (data: SelectionData) => void
}