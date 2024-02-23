import { Avatar } from "@nextui-org/react";
import ListEmail from "../components/Home/ListEmail";
import ViewEmail from "../components/Home/ViewEmail";
import { Button } from "@nextui-org/react";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row justify-between p-3 align-middle text-center">
        <div className="text-md text-blue-500 font-bold">
          <p className="text-center pl-9">App Messages</p>
        </div>
        <div className="flex flex-row gap-3 pl-2 h-[30px]">
          <Avatar />
          <Button color="primary" variant="bordered">
            Cerrar Sesión
          </Button>
        </div>
      </div>
      <div className="flex flex-row justify-around h-[90vh]">
        <ListEmail />
        <ViewEmail />
      </div>
    </div>
  );
};

export default Home;
