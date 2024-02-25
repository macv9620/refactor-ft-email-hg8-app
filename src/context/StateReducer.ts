import { reducerCase } from "./constants";

export const initialState = {
  userInfo: undefined,
};

const reducer = (state: any, action: any) => {
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
