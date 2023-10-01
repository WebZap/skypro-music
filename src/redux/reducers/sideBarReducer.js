const RENDER_CARDS = 'RENDER_CARDS';

export const renderCardAction = () => {
    return {
        type: RENDER_CARDS
    }
}


let initialState = {
    sideBarCardsArray: [
        { id: 0, src: "img/playlist01.png", ref: "#", altData: "day's playlist" },
        { id: 1, src: "img/playlist02.png", ref: "#", altData: "100 dance" },
        { id: 2, src: "img/playlist03.png", ref: "#", altData: "Indi power" },
    ]
}



const sideBarCardsReducers = (state = initialState, action) => {
    switch (action.type) {
        case RENDER_CARDS:
            return state
        default:
            return state
    }
}



export default sideBarCardsReducers