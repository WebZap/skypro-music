import React from "react";
import {
    Anchor,
    Button,
    ContainerSignup,
    FormLogin,
    Input,
    Logo,
    LogoImg,
    ModalBlock,
    Wrapper,
} from "../styled_components/registrationComponents";

const Registration = () => {
    return (
        <Wrapper>
            <ContainerSignup>
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
                            className="password-first"
                            type="password"
                            name="password"
                            placeholder="Пароль"
                        />
                        <Input
                            className="password-double"
                            type="password"
                            name="password"
                            placeholder="Повторите пароль"
                        />
                        <Button>
                            <Anchor href="../index.html">
                                Зарегистрироваться
                            </Anchor>
                        </Button>
                    </FormLogin>
                </ModalBlock>
            </ContainerSignup>
        </Wrapper>
    );
};

export default Registration;
