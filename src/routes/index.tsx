import { Routes, Route } from "react-router-dom";

import Register from "../pages/Register";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";

const ThemeRoutes = () => {
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
