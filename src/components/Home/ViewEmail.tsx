//import EmailType from "../../types/EmailType";
import { Spinner } from "@nextui-org/react";

interface ViewEmailProps {
  emailSelected?: any | null;
}

const ViewEmail: React.FC<ViewEmailProps> = ({ emailSelected }) => {
  let email = localStorage.getItem("email");
  if (email) {
    email = email.replace(/"/g, "");
  }

  if (!emailSelected)
    return (
      <div className="bg-gray-50 rounded-lg w-[65%] shadow-lg flex flex-col overflow-hidden mb-6 align-middle justify-center">
        <Spinner color="default" />
        <div className="w-full flex flex-row justify-center mt-3">
          <p className="text-sm text-gray-400">Selecciona un correo</p>
        </div>
      </div>
    );

  return (
    <div className="bg-gray-50 rounded-lg w-[65%] shadow-lg flex flex-col overflow-hidden mb-6">
      <div className="bg-white rounded-lg p-5 m-3 font-bold">
        {emailSelected?.subject}
      </div>
      <div className="bg-white rounded-lg p-5 m-3">
        <div>
          <p>
            Enviado por:{" "}
            <span className="text-blue-500 font-bold">
              {emailSelected?.sender.u_email}
            </span>
          </p>
          <div className="flex flex-row justify-between mb-4">
            <p>
              Para: <span className="text-blue-500">{email}</span>
            </p>
            {/* <p className="text-sm">{emailSelected?.date}</p> */}
            <p className="text-sm">{""}</p>
          </div>
        </div>
        <div className="h-screen overflow-y-auto">{emailSelected?.body}</div>
      </div>
    </div>
  );
};

export default ViewEmail;
