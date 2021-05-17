import React, { Reducer } from "react";
import { mergeWith, cloneDeep } from "lodash";
import { InitialAppContext, AppContextType } from "../helpers/types";
import { initializeContextFromSessionStorage } from "./sessionStore";

let sessionStorage =
  initializeContextFromSessionStorage && initializeContextFromSessionStorage();

// Concatting rather than replacing arrays
export const customizer = (objValue: any, srcValue: any) => {
  if (Array.isArray(objValue)) {
    return srcValue;
  }
};

// Merge session and initial context. This will be store into context below
export const initializingAppStateWithSession = {
  ...mergeWith(cloneDeep(InitialAppContext), sessionStorage, customizer),
} as AppContextType;

export const initValue = {
  initAppState: initializingAppStateWithSession,
} as InitContextProps;

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export type PartialAppState = RecursivePartial<AppContextType>;

// Might want to store into session and use that for the initial value
export const AppStateContext = React.createContext(initValue);

// Reducer for the App state
export const AppStateReducer: Reducer<AppContextType, PartialAppState> = (
  initAppState,
  action
) => {
  return {
    ...mergeWith(initAppState, action, customizer),
  } as AppContextType;
};

export type Dispatch = React.Dispatch<PartialAppState>;

export interface InitContextProps {
  initAppState: AppContextType;
  dispatch: Dispatch;
}
