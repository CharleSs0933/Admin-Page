import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const StaffRoute = ({ children }) => {
  const auth = useAuth();

  // Check if the user is an admin or manager
  const isAuthorized =
    auth.isRoleAccept("admin") ||
    auth.isRoleAccept("manager") ||
    auth.isRoleAccept("staff");

  // If authorized, render the children; otherwise, redirect to a login or forbidden page
  return isAuthorized ? children : <Navigate to="/error" />;
};

export default StaffRoute;
