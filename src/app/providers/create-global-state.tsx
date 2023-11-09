import { useState, useContext, createContext, ReactNode, Dispatch, FC } from 'react'

type ContextValue<T> = [T, Dispatch<React.SetStateAction<T>>]
type ProviderProps<T> = { children: ReactNode; value?: T }
export type GlobalStateResult<T> = [() => ContextValue<T>, FC<ProviderProps<T>>]

export default function createGlobalState<T = any>(initialState: T, stateHook = useState): GlobalStateResult<T> {
  const Context = createContext<ContextValue<T>>([initialState, () => {}])

  const Provider = (props: ProviderProps<T>) => {
    const state = stateHook(props.value || initialState)

    return <Context.Provider value={state}>{props.children}</Context.Provider>
  }

  return [() => useContext(Context), Provider]
}