const RENDER_CARDS = 'RENDER_CARDS';

export const renderCardAction = () => {
    return {
        type: RENDER_CARDS
    }
}


let initialState = {
    sideBarCardsArray: [
        { id: "1", src: "/img/playlist01.png", ref: "/category/1", altData: "day's playlist", title: "Плейлист Дня" },
        { id: "2", src: "/img/playlist02.png", ref: "/category/2", altData: "100 dance", title: "Танцевальные 100" },
        { id: "3", src: "/img/playlist03.png", ref: "/category/3", altData: "Indi power", title: "Инди Заряд" },
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