import { EventHandler } from "@create-figma-plugin/utilities"

export interface NotifyHandler extends EventHandler {
  name: 'NOTIFY'
  handler: (...params: Parameters<typeof figma.notify>) => void
}