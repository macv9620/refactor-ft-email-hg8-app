import UserType from "./UserType";

type ActionType = {
  type: string;
  userInfo?: UserType;
};

export default ActionType;
