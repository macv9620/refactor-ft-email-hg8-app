import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useStateProvider } from "../context/StateContext";
import { reducerCase } from "../context/constants";
import Test from "../pages/Test";

const ThemeRoutes = () => {
  const [{ userInfo }, dispatch] = useStateProvider();

  const login = () => {
    dispatch({
      type: reducerCase.SET_USER_INFO,
      userInfo: {
        id: "1",
        password: "admin",
        username: "admin",
      },
    });
    console.log(userInfo);
  };

  return (
    <BrowserRouter>
      <button onClick={login}>Login</button>
      <Link to="/test">Test</Link>
      <Routes>
        <Route path="/" element={<h1>Hola como vas</h1>} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ThemeRoutes;
