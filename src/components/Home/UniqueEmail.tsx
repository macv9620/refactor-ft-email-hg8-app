import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

const UniqueEmail = () => {
  return (
    <div className="h-fit w-full">
      <Card className="py-2 px-2">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                {"Gabriel Suarez Baron"}
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                {"gasuarez2002@gmail.com"}
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
          <p>
            Frontend developer and UI/UX enthusiast. Join me on this coding
            adventure! Frontend developer and UI/UX enthusiast. Join me on this
            coding adventure! Frontend developer and UI/UX enthusiast. Join me
            on this coding adventure! Frontend developer and UI/UX enthusiast.
            Join me on this coding adventure! Frontend developer and UI/UX
            enthusiast. Join me on this coding adventure!
          </p>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className=" text-default-400 text-small">Enviado a las:</p>
            <p className="font-semibold text-default-400 text-small">
              {"15:03"}
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UniqueEmail;
