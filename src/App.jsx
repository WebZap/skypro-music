import React, { useState } from "react";
import AppRoutes from "./routes/AppRoutes.routes";

const App = () => {
    const [user, setUser] = useState(
        (/* Срабатывает один раз при инициализации компонента*/) => {
            const savedUser = localStorage.getItem("user");
            return savedUser === "true" ? true : null;
        }
    );

    const handleLogin = () => {
        localStorage.setItem("user", "true");
        setUser(true);
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AppRoutes
            isLogin={user}
            onButtonLogin={handleLogin}
            onButtonLogout={handleLogout}
        />
    );
};

export default App;
