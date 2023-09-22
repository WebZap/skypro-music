import React from "react";

import NavMenu from "./components/NavMenu/NavMenu";
import CenterBlock from "./components/CenterBlock/CenterBlock";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import PlayerBar from "./components/PlayerBar/PlayerBar";
import SkeletonSidebar from "./components/Skeleton_modules/SkeletonSidebar";

const App = (props) => {
    return (
        <div className="wrapper">
            <div className="container">
                <main className="main">
                    <NavMenu />
                    <CenterBlock state={props.state} />
                    <SideBar state={props.state} />
                </main>
                <PlayerBar />
                <Footer />
            </div>
        </div>
    );
};

export default App;
