import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import FormEmail from "./FormEmail";
import EmailFormType from "../../types/EmailFormType";
import { useState } from "react";

export default function ModalEmail() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [emailToSend, setEmailToSend] = useState<Partial<EmailFormType> | null>(
    null
  );

  const handleOpen = () => {
    onOpen();
  };

  const getEmail = (emailToSend: EmailFormType) => {
    setEmailToSend(emailToSend);
  };

  const sendEmail = () => {
    const date: string = new Date().toLocaleString();
    const updatedEmailToSend: Partial<EmailFormType> = {
      ...emailToSend,
      date: date,
    };
    setEmailToSend(updatedEmailToSend);
    console.log(updatedEmailToSend);
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          onPress={() => handleOpen()}
          className="py-2 px-4 bg-primary hover:bg-primary-dark text-white font-semibold shadow-2xl transition duration-300"
        >
          Nuevo Correo
        </Button>
      </div>
      <Modal size={"5xl"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Enviar un correo
              </ModalHeader>
              <ModalBody>
                <FormEmail getEmail={getEmail} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Descartar
                </Button>
                <Button color="primary" onPress={onClose} onClick={sendEmail}>
                  Enviar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
