import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Column = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;
    width: ${({ width }) => `${width}px`};
    text-align: ${({ align }) => align};
`;

export const TitleSvg = styled.svg`
    width: 12px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;

export const Playlist = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

export const SongWrapper = styled.div`
    width: 100%;
    display: block;
    margin-bottom: 12px;
`;

export const Track = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const BlockTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 447px;
`;

export const TitleImage = styled.div`
    width: 51px;
    height: 51px;
    padding: 16px;
    background: #313131;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 17px;
`;

export const Svg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
`;

export const LinkStyle = styled.div`
    /* display: block; */
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({ color }) => color || "#ffffff"};
    text-align: ${({ align }) => align || "none"};
`;

export const Uvailable = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4e4e4e;
`;

export const BlockAuthor = styled.div`
    width: 321px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: flex-start;
`;

export const BlockAlbum = styled.div`
    width: 245px;
`;

export const BlockTime = styled.div``;

export const Like = styled.svg`
    width: 14px;
    height: 12px;
    margin-right: 17px;
    fill: transparent;
    stroke: #696969;
`;

export const Text = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
`;

export const FooterBlock = styled.footer``;
