import styled from "styled-components";

export const ButtonText = styled.div`
    &:hover {
        border-color: #d9b6ff;
        color: #d9b6ff;
        cursor: pointer;
    }
    &:active {
        border-color: #ad61ff;
        color: #ad61ff;
        /* cursor: pointer; */
    }
`;

export const ButtonPlayer = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

// margin-right: ${(mr) => mr || "none"};
// fill: ${(fill) => fill || "none"};

export const EffectsSvgButtons = styled.svg`
    &:hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
    &:active svg {
        fill: transparent;
        stroke: #ffffff;
        cursor: pointer;
    }
    &:active {
        fill: #696969;
        stroke: #ffffff;
        cursor: pointer;
    }
`;

// ._btn-icon:hover svg {
//     fill: transparent;
//     stroke: #acacac;
//     cursor: pointer;
//   }

//   /* ._btn-text:active {
//     border-color: #ad61ff;
//     color: #ad61ff;
//     cursor: pointer;
//   } */

//   ._btn-icon:active svg {
//     fill: transparent;
//     stroke: #ffffff;
//     cursor: pointer;
//   }

//   ._btn-icon:active .track-play__like-svg,
//   ._btn-icon:active .track-play__dislike-svg {
//     fill: #696969;
//     stroke: #ffffff;
//     cursor: pointer;
//   }
