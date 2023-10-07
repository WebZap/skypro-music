import styled from "styled-components";

export const ResetStyles = styled.div`
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    &:before,
    &:after {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
`;

export const StyledLink = styled.a`
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer;
    color: #000; /* Добавлен цвет текста */
`;

export const StyledButton = styled.button`
    cursor: pointer;
    font-family: "StratosSkyeng", sans-serif;
    color: #fff; /* Добавлен цвет текста */
`;

export const StyledList = styled.ul`
    list-style: none;
`;

export const StratosSkyengFont = styled.div`
    @font-face {
        font-family: "StratosSkyeng";
        src: local("StratosSkyeng"), local("StratosSkyeng"),
            url("../fonts/StratosSkyeng.woff2") format("woff2"),
            url("../fonts/StratosSkyeng.woff") format("woff"),
            url("../fonts/StratosSkyeng.ttf") format("truetype");
        font-weight: 400;
        font-style: normal;
    }
`;

export const PageStyles = styled.div`
    width: 100%;
    height: 100%;
    font-family: "StratosSkyeng", sans-serif;
    background-color: #f4f5f6; /* Добавлен цвет фона */
`;

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #fff; /* Добавлен цвет фона */
`;

export const EnterContainer = styled.div`
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: rgba(0, 0, 0, 0.85);
`;

export const EnterButton = styled(StyledButton)`
    width: 278px;
    height: 52px;
    background-color: #580ea2;
    border-radius: 6px;
    margin-top: 60px;
    margin-bottom: 20px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #3f007d;
    }

    &:active {
        background-color: #271a58;
    }
`;

export const SignupButton = styled(StyledButton)`
    width: 278px;
    height: 52px;
    background-color: transparent;
    border: 1px solid #d0cece;
    border-radius: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #f4f5f6;
    }

    &:active {
        background-color: #d9d9d9;
    }
`;

export const LoginInput = styled.input`
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #d0cece;
    padding: 8px 1px;

    &::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }
`;

export const Logo = styled.div`
    width: 140px;
    height: 21px;
    margin-bottom: 34px;
    background-color: transparent;
`;

export const LogoImage = styled.img`
    width: 140px;
    height: auto;
`;

export const PasswordInput = styled(LoginInput)`
    margin-bottom: 30px;
`;
