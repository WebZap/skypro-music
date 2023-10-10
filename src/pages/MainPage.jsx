import React from "react";
import NavMenu from "../components/NavMenu/NavMenu";
import CenterBlock from "../components/CenterBlock/CenterBlock";
import Footer from "../components/Footer/Footer";
import PlayerBar from "../components/PlayerBar/PlayerBar";
import { Wrapper, Container, Main } from "../styled_components/appComponents";
import SideBarContainer from "../components/SideBar/SideBarContainer";
import PlayerBarContainer from "../components/PlayerBar/PlayerBarContainer";

const MainPage = ({ onButtonLogout }) => {
    return (
        <Wrapper>
            <Container>
                <Main>
                    <NavMenu />
                    <CenterBlock />
                    <SideBarContainer onButtonLogout={onButtonLogout} />
                </Main>
                <PlayerBarContainer />
                <Footer />
            </Container>
        </Wrapper>
    );
};

export default MainPage;
