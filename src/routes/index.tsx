import { Routes, Route } from "react-router-dom";
//import { Routes, Route, useNavigate } from "react-router-dom";

// import { useStateProvider } from "../context/StateContext";
// import { reducerCase } from "../context/constants";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";

const ThemeRoutes = () => {
  // const [{ userInfo }, dispatch] = useStateProvider();

  // const navigate = useNavigate();

  // const login = () => {
  //   dispatch({
  //     type: reducerCase.SET_USER_INFO,
  //     userInfo: {
  //       id: "1",
  //       password: "admin",
  //       username: "admin",
  //     },
  //   });
  //   navigate("/");
  // };

  // if (!userInfo) navigate("/login");

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default ThemeRoutes;
