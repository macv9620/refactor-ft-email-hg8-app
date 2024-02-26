import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
//import EmailType from "../../types/EmailType";

interface UniqueEmailProps {
  email: any;
  handleEmailSelected: (id: string) => void;
}

const UniqueEmail: React.FC<UniqueEmailProps> = ({
  email,
  handleEmailSelected,
}) => {
  const fechaActual = new Date();
  return (
    <div className="h-fit w-full" onClick={() => handleEmailSelected(email.id)}>
      <Card className="py-2 px-2">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                {email.sender.name}
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                {`${email.sender.u_email}`}
              </h5>
            </div>
          </div>
        </CardHeader>
        <CardBody
          className="px-3 py-0 text-small text-default-400"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <p className="font-semibold">{email.subject}</p>
          <p>{email.body}</p>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex flex-row gap-1">
            <p className="text-default-400 text-small">Enviado a las:</p>
            <p className="font-semibold text-default-400 text-small">
              {fechaActual.toLocaleTimeString()}
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UniqueEmail;
