const RENDER_FILTER = 'RENDER_FILTER_LIST'
const OPEN_FILTER = 'OPEN_FILTER'


const initialState = {
    filterAuthor: {
        filter: "author",
        title: "исполнителю",
        dataFilter: [
            { titleItem: "Dasha", path: "dasha-singer" },
            { titleItem: "Roma", path: "roma-singer" },
            { titleItem: "Vlada", path: "vlada-singer" },
            { titleItem: "Nikita", path: "nikita-singer" },
            { titleItem: "Stas", path: "nikita-singer" },
            { titleItem: "Vika", path: "vika-singer" },
            { titleItem: "Pasha", path: "pasha-singer" },
        ],
    },
    filterYear: {
        filter: "year",
        title: "году",
        dataFilter: [
            { titleItem: "2003", path: "2003-year" },
            { titleItem: "2012", path: "2012-year" },
            { titleItem: "2123", path: "2123-year" },
            { titleItem: "1902", path: "1902-year" },
            { titleItem: "1917", path: "1917-year" },
            { titleItem: "1865", path: "1865-year" },
            { titleItem: "1231", path: "1231-year" },
        ],
    },
    filterGenre: {
        filter: "ganre",
        title: "жанр",
        dataFilter: [
            { titleItem: "Поп", path: "music-pop" },
            { titleItem: "Чубадаба", path: "music-chubada" },
            { titleItem: "Разгуляй", path: "music-relax" },
            { titleItem: "А ты буди буди", path: "music-top" },
            { titleItem: "Стек", path: "music-html" },
            { titleItem: "Лофай", path: "music-lo-fi" },
            { titleItem: "Мимо", path: "music-no" },
        ],
    },
    filterOpen: ''

}

const filterListReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case RENDER_FILTER:
            return state
        case OPEN_FILTER:
            const newFilterOpen = state.filterOpen === action.filterType ? '' : action.filterType//проверка значения ключа и получаемого из акшина ключ
            return {
                ...state,
                filterOpen: newFilterOpen
            }
        default:
            return state;
    }
}




export const renderFilterListAction = () => {
    return {
        type: RENDER_FILTER
    }
}

export const openFilter = (filterType) => {
    return {
        type: OPEN_FILTER,
        filterType
    }
}

export default filterListReducer
