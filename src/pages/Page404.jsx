import React from "react";
import styled from "styled-components";
import { Wrapper, Container, Main } from "../styled_components/appComponents";
import NavMenu from "../components/NavMenu/NavMenu";
import CenterBlock from "../components/CenterBlock/CenterBlock";
import PlayerBar from "../components/PlayerBar/PlayerBar";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SideBar";
import { SideBarBlock } from "../styled_components/sidebarComponents";
import { NavLink, useNavigate } from "react-router-dom";
const Content = styled.div`
    margin: 400px auto;
    text-align: center;
`;

const Heading = styled.h1`
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Button = styled(NavLink)`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #580ea2;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 20px;
`;

const NotFound404 = () => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <Container>
                <Main>
                    <NavMenu />
                    <Content>
                        <Heading>404 Страница не найдена</Heading>
                        <Button to="/">Вернуться на главную</Button>
                        <Button onClick={() => navigate(-1)}>Nazat</Button>
                    </Content>
                    <SideBarBlock />
                </Main>
                <Footer />
            </Container>
        </Wrapper>
    );
};

export default NotFound404;
