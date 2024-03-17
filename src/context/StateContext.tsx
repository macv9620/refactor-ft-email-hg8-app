import { createContext, useReducer, useContext, ReactNode, Reducer, Dispatch } from "react";

type ReducerType<S, A> = Reducer<S, A>;
type InitialStateType<S> = S;
type ChildrenType = ReactNode;

type StateContextType<S, A> = {
  state: S;
  dispatch: Dispatch<A>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StateContext = createContext({} as StateContextType<any, any>);

export const StateProvider = <S, A>({ initialState, reducer, children }: {
  initialState: InitialStateType<S>;
  reducer: ReducerType<InitialStateType<S>, A>;
  children: ChildrenType;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStateProvider = <S, A>() => useContext(StateContext) as StateContextType<S, A>;
