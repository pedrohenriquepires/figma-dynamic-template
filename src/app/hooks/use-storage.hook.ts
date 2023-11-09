import { emit, on } from "@create-figma-plugin/utilities"
import { useEffect, useState } from 'react'
import { StorageKeys } from '~/@types/storage-keys'
import { GetStorageHandler, SetStorageHandler, StorageResponseHandler } from '~/plugin/events/storage/storage.types'

type Result<T> = [T, (value: React.SetStateAction<T>) => void]

export const useStorage = <T>(key: StorageKeys, initialValue: T): Result<T> => {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    emit<GetStorageHandler>('GET_STORAGE', key)

    on<StorageResponseHandler>(`STORAGE_RESPONSE_${key}`, (value: T) => {
      if(value === undefined || value === null) {
        value = initialValue
      }
      
      setStoredValue(value)
    })
  }, [])

  const setValue: React.Dispatch<React.SetStateAction<T>> = (value) => {
    const newValue = isFunction(value) ? value(storedValue) : value
    emit<SetStorageHandler>('SET_STORAGE', key, newValue)
    setStoredValue(newValue)
  }

  return [storedValue, setValue]
}

export const isFunction = (value: unknown): value is Function => typeof value === 'function'