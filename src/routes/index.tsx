import { Routes, Route, useNavigate } from "react-router-dom";
import { useStateProvider } from "../context/StateContext";
import { reducerCase } from "../context/constants";
import ProtectedRoute from "../components/ProtectedRoute";

const ThemeRoutes = () => {
  const [{ userInfo }, dispatch] = useStateProvider();

  const navigate = useNavigate();

  const login = () => {
    dispatch({
      type: reducerCase.SET_USER_INFO,
      userInfo: {
        id: "1",
        password: "admin",
        username: "admin",
      },
    });

    navigate("/");
  };

  const logout = () => {
    dispatch({
      type: reducerCase.SET_USER_INFO,
      userInfo: null,
    });
  };

  return (
    <>
      {userInfo ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Do Login</button>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <h1>Hola</h1>
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<h1>Login</h1>} />
      </Routes>
    </>
  );
};

export default ThemeRoutes;
