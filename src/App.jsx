import React from "react";
import NavMenu from "./components/NavMenu/NavMenu";
import CenterBlock from "./components/CenterBlock/CenterBlock";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import PlayerBar from "./components/PlayerBar/PlayerBar";
import SkeletonSidebar from "./components/Skeleton_modules/SkeletonSidebar";
import { Wrapper, Container, Main } from "./styled_components/appComponents";

const App = (props) => {
    return (
        <Wrapper>
            <Container>
                <Main>
                    <NavMenu />
                    <CenterBlock />
                    <SideBar state={props.state} />
                </Main>
                <PlayerBar />
                <Footer />
            </Container>
        </Wrapper>
    );
};

export default App;
