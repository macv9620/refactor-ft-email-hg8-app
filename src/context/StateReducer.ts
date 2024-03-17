import { Action } from "./models/state.models";
import { State } from "./models/state.models";

export const initialState: State = {
  userInfo: "",
};


export const reducerCase = {
  SET_USER_INFO: "SET_USER_INFO",
};


const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case reducerCase.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    default:
      return state;
  }
};

export default reducer;
