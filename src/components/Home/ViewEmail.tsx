import EmailType from "../../types/EmailType";
import { Spinner } from "@nextui-org/react";

interface ViewEmailProps {
  emailSelected?: EmailType | null;
}

const ViewEmail: React.FC<ViewEmailProps> = ({ emailSelected }) => {
  let email = localStorage.getItem("email");
  if (email) {
    email = email.replace(/"/g, "");
  }

  const formatTimeStamp = (date: string) => {
    const dividedTimeStamp = date.split("T")
    const time = dividedTimeStamp[1].slice(0,8)
    return dividedTimeStamp[0] + " " + time
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
              Para:{" "}
              <span className="text-blue-500">
                {emailSelected.recipient.name}
              </span>
            </p>
            <p className="text-sm">
              {emailSelected.timestamp
                ? formatTimeStamp(emailSelected.timestamp)
                : "No disponible"}
            </p>
          </div>
        </div>
        <div className="h-screen overflow-y-auto">{emailSelected?.body}</div>
      </div>
    </div>
  );
};

export default ViewEmail;
