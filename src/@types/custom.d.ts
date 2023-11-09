declare module '*.svg'
declare module '*.json'
declare const __VERSION__: string

type Only<T, K extends keyof T> = T[K]