import { Avatar } from "@nextui-org/react";
import ListEmail from "../components/Home/ListEmail";
import ViewEmail from "../components/Home/ViewEmail";
import { Button } from "@nextui-org/react";
import { useStateProvider } from "../context/StateContext";
import { reducerCase } from "../context/constants";
import EmailType from "../types/EmailType";
import { useState, useEffect } from "react";
import ModalEmail from "../components/NewEmail/ModalEmail";
import emailService from "../services/emailService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Home = () => {
  const [{}, dispatch] = useStateProvider();
  const [emailSelected, setEmailSelected] = useState<EmailType | null>(null);
  const [emails, setEmails] = useState<any[]>([]);

  const navigate = useNavigate();

  const handleEmailSelected = (id: string) => {
    const email = emails.find((email) => email.id === id);
    if (email) setEmailSelected(email);
  };

  useEffect(() => {
    emailService
      .getEmails()
      .then((res) => {
        setEmails(res.data);
        console.log(res.data);
      })
      .catch(() => {
        toast("No has iniciado sesion", { type: "error" });
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("email");
    toast("Sesión cerrada", { type: "success" });
    dispatch({
      type: reducerCase.SET_USER_INFO,
      userInfo: null,
    });
    navigate("/login");
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row justify-between p-3 text-center mb-2">
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
        <ListEmail emails={emails} handleEmailSelected={handleEmailSelected} />
        <ViewEmail emailSelected={emailSelected} />
      </div>
      <div className="absolute bottom-20 right-10 shadow-2xl">
        <ModalEmail />
      </div>
    </div>
  );
};

export default Home;
