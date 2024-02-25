import React, { ReactNode } from "react";
import { useStateProvider } from "../context/StateContext";
//import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [{ userInfo }] = useStateProvider();

  console.log(userInfo);

  //TODO: If there is no login info, check the local storage and validate the token

  // if (!userInfo) {
  //   return <Navigate to="/login" />;
  // }
  return children;
};
export default ProtectedRoute;
