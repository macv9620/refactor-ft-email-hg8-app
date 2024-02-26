//import EmailType from "../../types/EmailType";
import UniqueEmail from "./UniqueEmail";
import React from "react";
import { Spinner } from "@nextui-org/react";

interface ListEmailProps {
  emails: any[];
  handleEmailSelected: (id: string) => void;
}

const ListEmail: React.FC<ListEmailProps> = ({
  emails,
  handleEmailSelected,
}) => {
  if (emails.length === 0)
    return (
      <div className="bg-gray-50 rounded-lg w-[30%] shadow-lg flex flex-col overflow-hidden mb-6 align-middle justify-center">
        <Spinner color="default" />
        <div className="w-full flex flex-row justify-center mt-3">
          <p className="text-sm text-gray-400">No se encontraron correos</p>
        </div>
      </div>
    );
  return (
    <div className="w-[30%] flex flex-col items-center mx-5 gap-4 p-3 overflow-y-auto justify-start">
      {emails.map((email) => (
        <UniqueEmail
          key={email.id}
          email={email}
          handleEmailSelected={handleEmailSelected}
        />
      ))}
    </div>
  );
};

export default ListEmail;
