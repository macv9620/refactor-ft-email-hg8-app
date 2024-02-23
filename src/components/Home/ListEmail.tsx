import EmailType from "../../types/EmailType";
import UniqueEmail from "./UniqueEmail";
import React from "react";

interface ListEmailProps {
  emails: EmailType[];
  handleEmailSelected: (id: string) => void;
}

const ListEmail: React.FC<ListEmailProps> = ({
  emails,
  handleEmailSelected,
}) => {
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
