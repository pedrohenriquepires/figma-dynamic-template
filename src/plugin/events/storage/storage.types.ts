import { EventHandler } from '@create-figma-plugin/utilities'
import { StorageKeys } from '~/@types/storage-keys'

export interface GetStorageHandler extends EventHandler {
  name: 'GET_STORAGE'
  handler: (key: StorageKeys) => void
}

export interface SetStorageHandler extends EventHandler {
  name: 'SET_STORAGE'
  handler: (key: StorageKeys, value: any) => void
}

export interface StorageResponseHandler extends EventHandler {
  name: `STORAGE_RESPONSE_${StorageKeys}`
  handler: (value: any) => void
}
