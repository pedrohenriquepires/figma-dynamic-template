import { FC, PropsWithChildren } from 'react'
import * as providers from './index'

const isNotAppProvider = (name: string) => name !== 'RootProvider'
const isProvider = (name: string) => /.*Provider$/.test(name)

interface Props {
  children: JSX.Element
}

export const RootProvider = ({ children }: Props): JSX.Element => {
  return Object.keys(providers)
    .filter(isNotAppProvider)
    .filter(isProvider)
    .reduce<JSX.Element>((acc, provider) => {
      const CurrentProvider = providers[provider as keyof typeof providers] as FC<PropsWithChildren>

      return <CurrentProvider>{acc}</CurrentProvider>
    }, children)
}