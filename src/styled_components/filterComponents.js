import styled from "styled-components";
import { ButtonText } from "./baseButtons";
import { NavLink } from "react-router-dom";

export const WrraperFilter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 51px;
`;

export const Title = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`;

export const WrappButton = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const FilterButton = styled(ButtonText)`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px;
    &:not(:last-child) {
        margin-right: 10px;
    }
`;

export const FilterListWrapp = styled.div`
    position: absolute;
    top: 50px;
    width: 248px;
    min-height: 196px;
    max-height: 305px;
    padding: 10px 38px 10px 38px;
    border-radius: 12px;
    overflow-y: auto;
    background: #313131;
    color: #ffffff;
    font-family: "StratosSkyeng", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    scrollbar-color: #b672ff #313131;
    scrollbar-track-color: #313131;
    scrollbar-width: auto;
    &::-webkit-scrollbar-thumb {
        background-color: #b672ff;
        border-radius: 10px;
        border: 3px solid #313131;
    }
`;

export const FilterListItems = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const FilterNavLinks = styled(NavLink)`
    display: block;
    text-decoration: none;
    color: inherit;
    padding: 8px 16px;
`;
