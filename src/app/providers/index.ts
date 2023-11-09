import { StorageKeys } from '~/@types/storage-keys'
import { useStorage } from '../hooks/use-storage.hook'
import createGlobalState from './create-global-state'

export { RootProvider } from './root.provider'

export const [useGlobalList, ListProvider] = createGlobalState('', () => useStorage(StorageKeys.VALUE, ''))
export const [useGlobalTemplateProperties, TemplatePropertiesProvider] = createGlobalState<string[]>([])
