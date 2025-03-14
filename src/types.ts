import React from 'react'
import type {useAwait} from './useAwait'
import type {useAwaitContext} from './useAwaitContext'

export enum AwaitState {
  LOADING,
  STANDBY,
  ERROR,
}

export interface AwaitContextData {
  record: Record<string, AwaitState>
  setRecord: React.Dispatch<React.SetStateAction<Record<string, AwaitState>>>
}

export interface AwaitContextOptions {
  defaultLoadingView?: React.ReactElement
  defaultAnimationClassName?: string
  defaultAnimationDuration?: number
}

export type AwaitContextState = AwaitContextData & AwaitContextOptions

export type AwaitHandler = ReturnType<typeof useAwait>
export type AwaitHandlerContext = ReturnType<typeof useAwaitContext>
