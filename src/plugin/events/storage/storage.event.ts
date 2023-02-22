import { emit, on } from '@create-figma-plugin/utilities'
import { GetStorageHandler, SetStorageHandler, StorageResponseHandler } from './storage.types'

export const setupStorageEventsListener = () => {
  on<GetStorageHandler>('GET_STORAGE', async key => {
    emit<StorageResponseHandler>(`STORAGE_RESPONSE_${key}`, await figma.clientStorage.getAsync(key))
  })

  on<SetStorageHandler>('SET_STORAGE', (key, value) => {
    figma.clientStorage.setAsync(key, value)
  })
}
