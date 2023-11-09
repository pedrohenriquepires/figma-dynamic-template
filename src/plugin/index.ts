import { setupCompileEventListener } from './events/compile/compile.event'
import { setupNotifyEventListener } from './events/notify/notify.event'
import { setupStorageEventsListener } from './events/storage/storage.event'
import { setupTemplateSelectionEventListener } from './events/template-selection/template-selection.event'

figma.showUI(__html__, {
  height: 600,
  width: 800
})

setupCompileEventListener()
setupNotifyEventListener()
setupStorageEventsListener()
setupTemplateSelectionEventListener()
