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
import emailService from "../../services/emailService";
import { toast } from "react-toastify";

export default function ModalEmail() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [allowToSendMail, setAllowToSendMail] = useState<boolean>(false)

  const [emailToSend, setEmailToSend] = useState<EmailFormType | null>(null);

  const handleOpen = () => {
    onOpen();
  };

  const getEmail = (emailToSend: EmailFormType) => {
    setEmailToSend(emailToSend);
  };

  const sendEmail = () => {
    if (
      emailToSend === null ||
      emailToSend.recipient_email === "" ||
      emailToSend.subject === "" ||
      emailToSend.body === ""

    ) {
      toast.error("Todos los campos son requeridos");
      return;
    }
  
    // Email format validation
    const emailFormat = /\S+@\S+\.\S+/;
    if (!emailFormat.test(emailToSend.recipient_email)) {
      toast.error("El formato del correo electrónico es inválido");
      return;
    }



    if (emailToSend) {
      emailToSend.timestamp = new Date().toISOString();
      emailService
        .sendEmail(emailToSend)
        .then(() => {
          toast.success("Correo enviado con exito");
          onClose()
        })
        .catch((err) => {
          err.response.status === 404
            ? toast.error("El destinatario no existe")
            : toast.error("Error al enviar el correo");
        });
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          onPress={() => {
            setAllowToSendMail(false)
            handleOpen()
          }}
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
                <FormEmail getEmail={getEmail} setAllowToSendMail={setAllowToSendMail} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Descartar
                </Button>
                <Button
                  isDisabled={!allowToSendMail}
                  color="primary"
                  onClick={() => {
                    sendEmail()
                  }}
                >
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