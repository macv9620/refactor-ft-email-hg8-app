import React, { ReactNode } from "react";
import { useStateProvider } from "../context/StateContext";
import { useNavigate } from "react-router";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [{ userInfo }] = useStateProvider();
  const navigate = useNavigate();

  //TODO: If there is no login info, check the local storage and validate the token

  if (!userInfo || localStorage.getItem("access_token") === null) {
    navigate("/login");
  }

  return children;
};

export default ProtectedRoute;
