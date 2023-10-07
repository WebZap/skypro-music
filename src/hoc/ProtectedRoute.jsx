import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ redirectPath = "/login" }) => {
    const navigate = useNavigate();
    return !localStorage.user ? (
        navigate(redirectPath, { replace: false })
    ) : (
        // <Navigate to={redirectPath} replace />
        <Outlet />
    );
};

export default ProtectedRoute;
