import { cloneDeep, mergeWith } from "lodash";
import React, { useReducer } from "react";
import {
  AppStateContext,
  AppStateReducer,
  customizer,
} from "../hook/AppContext";
import { mockContextData } from "./mock";

type Props = {
  state?: Record<string, any>;
  mockContext?: any;
};
export const TestWrapper: React.FC<Props> = (props) => {
  const [initAppState, dispatch] = useReducer(
    AppStateReducer,
    mergeWith(
      cloneDeep(!props.mockContext ? mockContextData : props.mockContext),
      props.state,
      customizer
    )
  );

  return (
    <AppStateContext.Provider value={{ initAppState, dispatch }}>
      {props.children}
    </AppStateContext.Provider>
  );
};
