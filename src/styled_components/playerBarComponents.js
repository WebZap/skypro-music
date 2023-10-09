import styled from "styled-components";
import { ButtonPlayer, EffectsSvgButtons } from "./baseButtons";

export const WrappBar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(28, 28, 28, 0.5);
`;

export const WrappContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Progress = styled.div`
    width: 100%;
    height: 5px;
    background: #2e2e2e;
`;

export const WrappPlayer = styled.div`
    height: 73px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Player = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const Controls = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 27px 0 31px;
`;

export const PrevButton = styled(ButtonPlayer)`
    margin-right: 23px;
`;

export const PlayButton = styled(ButtonPlayer)`
    margin-right: 23px;
`;

export const NextButton = styled(ButtonPlayer)`
    margin-right: 28px;
    fill: #a53939;
`;

export const RepeatButton = styled(ButtonPlayer)`
    margin-right: 24px;
`;

export const ShuffleButton = styled(ButtonPlayer)`
    margin-right: 0px;
`;

export const PreSvg = styled(EffectsSvgButtons)`
    width: 15px;
    height: 14px;
`;
export const PlaySvg = styled.svg`
    width: 22px;
    height: 20px;
    fill: #d9d9d9;
`;
export const NextSvg = styled.svg`
    width: 15px;
    height: 14px;
    fill: inherit;
    stroke: #d9d9d9;
`;
export const RepeatSvg = styled.svg`
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;
export const ShuffleSvg = styled.svg`
    width: 19px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;

export const WrappTrackPlay = styled.div`
    display: flex;
    flex-direction: row;
`;

export const WrappLikeDisLike = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 26%;
`;

export const LikeButton = styled.div`
    padding: 5px;
`;

export const DisLikeButton = styled(LikeButton)`
    margin-left: 28.5px;
`;

export const LDSBvg = styled.svg`
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
    cursor: pointer;
    :active {
        fill: #696969;
        stroke: #ffffff;
        cursor: pointer;
    }
    :hover {
        fill: transparent;
        stroke: #ffffff;
        cursor: pointer;
    }
`;

export const VolumeBlock = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    padding: 0 92px 0 0;
`;

export const WrappVolume = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
`;

export const ImageVolume = styled.div`
    width: 13px;
    height: 18px;
    margin-right: 17px;
`;

export const ProgressVolume = styled.div`
    width: 109px;
`;

export const SvgVolume = styled.svg`
    width: 13px;
    height: 18px;
    fill: transparent;
`;

export const LineProgress = styled.input`
    width: 109px;
`;

export const WrappPlayContain = styled.div``;

export const Contain = styled.div`
    width: auto;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: auto 1fr;
    grid-template-columns: auto 1fr;
    grid-template-areas: "image author" "image album";
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;

export const TrackImage = styled.div`
    width: 51px;
    height: 51px;
    background-color: #313131;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 12px;
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    -ms-grid-column: 1;
    grid-area: image;
`;

export const TrackSvg = styled.svg`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
`;

export const Author = styled.div`
    grid-area: author;
    min-width: 49px;
`;

export const AuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    white-space: nowrap;
`;

export const Album = styled.div`
    grid-area: album;
    min-width: 49px;
`;

export const AlbumLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #ffffff;
`;
