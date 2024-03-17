import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { Action, State } from "./models/state.models";
import { initialState } from "./StateReducer";

type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};


const initialContext: ContextType = {
  state: initialState,
  dispatch: () => {},
};

export const StateContext = createContext<ContextType>(initialContext);

type StateProviderProps = {
  initialState: State;
  reducer: React.Reducer<State, Action>;
  children: ReactNode;
};

export const StateProvider: React.FC<StateProviderProps> = ({
  initialState,
  reducer,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = { state, dispatch };

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useStateProvider = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateProvider must be used within a StateProvider");
  }
  return context;
};