import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  AppStateContext,
  AppStateReducer,
  initializingAppStateWithSession,
} from "./hook/AppContext";
import { useReducer, useMemo } from "react";
import { AppContextType } from "./helpers/types";
import AppContent from "./AppContent";

function App() {
  // Build context and reducer
  const [initAppState, dispatch] = useReducer(
    AppStateReducer,
    initializingAppStateWithSession as AppContextType
  );
  // Define context provider at App level so that all the children components can
  // retrieve data from react context
  function AppWrapper() {
    return useMemo(
      () => (
        <AppStateContext.Provider value={{ initAppState, dispatch }}>
          <AppContent />
        </AppStateContext.Provider>
      ),
      [initAppState]
    );
  }

  return AppWrapper();
}

export default App;
