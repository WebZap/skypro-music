import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ redirectPath = "/login", isLogin }) => {
    return !isLogin ? <Navigate to={redirectPath} replace /> : <Outlet />;
};

export default ProtectedRoute;
