import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    font-family: "StratosSkyeng", sans-serif;
`;

export const ContainerSignup = styled.div`
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: rgba(0, 0, 0, 0.85);
`;

export const ModalBlock = styled.div`
    position: absolute;
    z-index: 2;
    left: calc(50% - (366px / 2));
    top: calc(50% - (439px / 2));
    opacity: 1;
`;

export const FormLogin = styled.form`
    width: 366px;
    height: 439px;
    background-color: #ffffff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 43px 44px 47px 40px;
`;

export const Logo = styled.div`
    width: 140px;
    height: 21px;
    margin-bottom: 34px;
    background-color: transparent;
`;

export const LogoImg = styled.img`
    width: 140px;
    height: auto;
`;

export const Input = styled.input`
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #d0cece;
    padding: 8px 1px;
    margin-right: 3px;
    margin-bottom: 30px;
    ::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }
`;

export const Button = styled.button`
    width: 278px;
    height: 62px;
    background-color: #580ea2;
    border-radius: 6px;
    margin-left: 4px;
    border: none;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Anchor = styled.a`
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
`;
