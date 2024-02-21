import { createContext, useReducer, useContext } from "react";

export const StateContext = createContext({} as any);

export const StateProvider = ({ initialState, reducer, children }: any) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateProvider = () => useContext(StateContext);
