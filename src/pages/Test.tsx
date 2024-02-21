import { useStateProvider } from "../context/StateContext";

const Test = () => {
  const [{ userInfo }] = useStateProvider();
  console.log(userInfo);

  return <div>Hola</div>;
};

export default Test;
