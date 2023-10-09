import React from "react";
import AppRoutes from "./routes/AppRoutes.routes";

const App = () => {
    const handleLogin = () => {
        localStorage.setItem("user", "true");
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
    };

    return (
        <AppRoutes onButtonLogin={handleLogin} onButtonLogout={handleLogout} />
    );
};

export default App;
