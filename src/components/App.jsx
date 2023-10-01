import React from "react";
import NavMenu from "./NavMenu/NavMenu";
import CenterBlock from "./CenterBlock/CenterBlock";
import Footer from "./Footer/Footer";
import PlayerBar from "./PlayerBar/PlayerBar";
import { Wrapper, Container, Main } from "../styled_components/appComponents";
import SideBarContainer from "./SideBar/SideBarContainer";

const App = () => {
    return (
        <Wrapper>
            <Container>
                <Main>
                    <NavMenu />
                    <CenterBlock />
                    <SideBarContainer />
                </Main>
                <PlayerBar />
                <Footer />
            </Container>
        </Wrapper>
    );
};

export default App;
