import React from "react";

import {
    ButtonEnter,
    ButtonLinkEnter,
    ButtonLinkSignup,
    ButtonSignup,
    ContainerEnter,
    FormLogin,
    Input,
    Logo,
    LogoImg,
    ModalBlock,
    Wrapper,
} from "../styled_components/loginComponents";
import { useNavigate } from "react-router-dom";

const Login = ({ onButtonLogin }) => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <ContainerEnter>
                <ModalBlock>
                    <FormLogin>
                        <a href="../">
                            <Logo>
                                <LogoImg
                                    src="../img/logo_modal.png"
                                    alt="logo"
                                />
                            </Logo>
                        </a>
                        <Input
                            className="login"
                            type="text"
                            name="login"
                            placeholder="Почта"
                        />
                        <Input
                            className="password"
                            type="password"
                            name="password"
                            placeholder="Пароль"
                        />
                        <ButtonEnter
                            onClick={() => {
                                onButtonLogin();
                                navigate("/", { replace: false });
                            }}
                        >
                            Войти
                        </ButtonEnter>
                        <ButtonSignup>
                            <ButtonLinkSignup to="/register">
                                Зарегистрироваться
                            </ButtonLinkSignup>
                        </ButtonSignup>
                    </FormLogin>
                </ModalBlock>
            </ContainerEnter>
        </Wrapper>
    );
};

export default Login;
