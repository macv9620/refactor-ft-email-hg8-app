import React, { ReactNode } from "react";
import { useStateProvider } from "../context/StateContext";
import { useNavigate } from "react-router";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const {state} = useStateProvider();
  const navigate = useNavigate();

  if (!state.userInfo || localStorage.getItem("access_token") === null) {
    navigate("/login");
  }

  return children;
};

export default ProtectedRoute;
