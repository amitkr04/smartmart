import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../Context/UserContextProvider";

const PrivateRoute = () => {
  const { user } = useContext(UserContext);

  return user?.email ? <Outlet /> : <Navigate to="/register" />;
};

export default PrivateRoute;
