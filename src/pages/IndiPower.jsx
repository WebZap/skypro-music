import React from "react";
import NavMenu from "../components/NavMenu/NavMenu";
import Footer from "../components/Footer/Footer";
import PlayerBar from "../components/PlayerBar/PlayerBar";
import { Wrapper, Container, Main } from "../styled_components/appComponents";
import SideBarContainer from "../components/SideBar/SideBarContainer";
import UsersListTracks from "../components/UsersListTracks/UsersListTracks";

const IndiPower = () => {
    return (
        <Wrapper>
            <Container>
                <Main>
                    <NavMenu />
                    <UsersListTracks />
                    <SideBarContainer />
                </Main>
                <PlayerBar />
                <Footer />
            </Container>
        </Wrapper>
    );
};

export default IndiPower;
