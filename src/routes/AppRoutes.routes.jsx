import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Collections from "../pages/Collections";
import NotFound404 from "../pages/Page404";
import UserTracks from "../pages/UserTracks";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = ({ onButtonLogin, onButtonLogout }) => {
    return (
        <Routes>
            <Route
                path="/login"
                element={<Login onButtonLogin={onButtonLogin} />}
            />
            <Route path="/register" element={<Registration />} />
            <Route element={<ProtectedRoute />}>
                <Route
                    path="/"
                    element={<MainPage onButtonLogout={onButtonLogout} />}
                />
                <Route path="/favorites" element={<UserTracks />} />
                <Route path="/category/:id/*" element={<Collections />} />
            </Route>
            <Route path="*" element={<NotFound404 />} />
        </Routes>
    );
};

export default AppRoutes;
