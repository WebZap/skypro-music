import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MenuBlock = styled.nav`
    width: 244px;
    background-color: #181818;
    padding: 20px 0 20px 36px;
`;

export const LogoBlock = styled.div`
    width: 113.33px;
    height: 43px;
    padding: 13px 0 13px 0;
    background-color: transparent;
    margin-bottom: 20px;
`;

export const Logo = styled.img`
    cursor: pointer;
    width: 113.33px;
    height: 17px;
    color: #181818;
`;

export const BurgerMenu = styled.div`
    cursor: pointer;
    width: 20px;
    height: 36px;
    padding: 13px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Line = styled.span`
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #d3d3d3;
`;

export const Menu = styled.div`
    display: block;
    visibility: visible;
`;

export const List = styled.ul`
    padding: 18px 0 10px 0;
`;

export const BurgerNavLink = styled(NavLink)`
    display: block;
    padding: 5px 0;
    margin-bottom: 16px;
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    /* line-height: 24px; */
`;
