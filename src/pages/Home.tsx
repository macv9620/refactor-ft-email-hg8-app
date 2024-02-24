import { Avatar } from "@nextui-org/react";
import ListEmail from "../components/Home/ListEmail";
import ViewEmail from "../components/Home/ViewEmail";
import { Button } from "@nextui-org/react";
import { useStateProvider } from "../context/StateContext";
import { reducerCase } from "../context/constants";
import emails from "../components/Home/Email.json";
import EmailType from "../types/EmailType";
import { useState } from "react";
import ModalEmail from "../components/NewEmail/ModalEmail";

const Home = () => {
  const [{}, dispatch] = useStateProvider();
  const [emailSelected, setEmailSelected] = useState<EmailType | null>(null);

  const handleEmailSelected = (id: string) => {
    const email = emails.find((email) => email.id === id);
    if (email) setEmailSelected(email);
  };

  const emailsArray: EmailType[] = emails;

  const logout = () => {
    dispatch({
      type: reducerCase.SET_USER_INFO,
      userInfo: null,
    });
  };

  console.log(emailsArray);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row justify-between p-3 align-middle text-center">
        <div className="text-md text-blue-500 font-bold">
          <p className="text-center pl-9">App Messages</p>
        </div>
        <div className="flex flex-row gap-3 pl-2 h-[30px]">
          <Avatar />
          <Button color="primary" variant="bordered" onClick={logout}>
            Cerrar Sesión
          </Button>
        </div>
      </div>
      <div className="flex flex-row justify-around h-[90vh]">
        <ListEmail
          emails={emailsArray}
          handleEmailSelected={handleEmailSelected}
        />
        <ViewEmail emailSelected={emailSelected} />
      </div>
      <div className="absolute bottom-20 right-10 shadow-2xl">
        <ModalEmail />
      </div>
    </div>
  );
};

export default Home;
