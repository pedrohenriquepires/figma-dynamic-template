import { emit } from '@create-figma-plugin/utilities'
import { CompileHandler } from '~/plugin/events/compile/compile.types'
import { useGlobalList } from '../providers'
import { NotifyHandler } from '~/plugin/events/notify/notify.types'

export const useCompile = () => {
  const [list] = useGlobalList()

  const compile = () => {
    try {
      emit<CompileHandler>('COMPILE', JSON.parse(list) as object[])
    } catch (err) {
      emit<NotifyHandler>('NOTIFY', 'Could not compile your template, please check your JSON.')
    }
  }

  return {
    compile
  }
}