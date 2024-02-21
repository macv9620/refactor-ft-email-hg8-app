import UserType from "./UserType";

type EmailType = {
  id: string;
  receiver: UserType;
  sender: UserType;
  title: string;
  body: string;
  date: string;
};

export default EmailType;
