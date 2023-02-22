import { EventHandler } from "@create-figma-plugin/utilities"

export interface CompileHandler extends EventHandler {
  name: 'COMPILE'
  handler: (list: object[]) => void
}