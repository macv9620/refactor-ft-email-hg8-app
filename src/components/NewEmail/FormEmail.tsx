import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { useState } from "react";

import EmailFormType from "../../types/EmailFormType";

interface FormEmailProps {
  getEmail: (emailToSend: EmailFormType) => void;
}

const FormEmail: React.FC<FormEmailProps> = ({ getEmail }) => {
  const [emailToSend, setEmailToSend] = useState<EmailFormType>({
    recipient_email: "",
    body: "",
    subject: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEmailToSend({
      ...emailToSend,
      [name]: value,
    });
    getEmail(emailToSend);
  };

  return (
    <div>
      <div className="flex flex-col gap-4 mb-4">
        <Input
          type="email"
          label="Para"
          placeholder="Escribe el correo del destinatario"
          name="recipient_email"
          value={emailToSend.recipient_email}
          onChange={handleInputChange}
        />
        <Input
          type="text"
          label="Asunto"
          placeholder="Escribe el Asunto"
          name="subject"
          value={emailToSend.subject}
          onChange={handleInputChange}
        />
      </div>
      <Textarea
        minRows={8}
        label="Descripción"
        placeholder="Escribe tu correo aquí..."
        className="w-full"
        name="body"
        value={emailToSend.body}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FormEmail;
