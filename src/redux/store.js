let store = {
    _state: {
        SidebarCards: [
            { id: 0, src: "img/playlist01.png", ref: "#", altData: "day's playlist" },
            { id: 1, src: "img/playlist02.png", ref: "#", altData: "100 dance" },
            { id: 2, src: "img/playlist03.png", ref: "#", altData: "Indi power" },
        ],
        SkeletonsProperty: {
            SkeletonSidebar: {
                width: 250,
                height: 150,
                viewBox: "0 0 250 150",

            }
        }
    },
    getSidebarCards() {
        return this._state.SidebarCards
    },


}

export const getTitleFilterName = () => {

}





export default store;