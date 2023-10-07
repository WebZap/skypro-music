import React from "react";
import { Container, Main, Wrapper } from "../styled_components/appComponents";
import NavMenu from "../components/NavMenu/NavMenu";
import CenterBlock from "../components/CenterBlock/CenterBlock";
import SideBarContainer from "../components/SideBar/SideBarContainer";
import PlayerBar from "../components/PlayerBar/PlayerBar";
import Footer from "../components/Footer/Footer";
import CollectionBlock from "../components/CollectionBlock/CollectionBlock";

const Collections = () => {
    return (
        <Wrapper>
            <Container>
                <Main>
                    <NavMenu />
                    <CollectionBlock />
                    <SideBarContainer />
                </Main>
                <PlayerBar />
                <Footer />
            </Container>
        </Wrapper>
    );
};

export default Collections;
