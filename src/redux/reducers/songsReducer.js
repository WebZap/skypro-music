const SET_TRACKS = "SET_TRACKS";
const SET_VISIBLE = "SET_VISIBLE";
const SET_INTIRE_TRACK = "SET_INTIRE_TRACK";
const SET_INTIRE_TRACK_DATA = "SET_INTIRE_TRACK_DATA"
const RESET_DATA_ALL_TRACKS = "RESET_DATA_ALL_TRACKS"


let initialState = {
    tracks: null,
    isFetching: false,
    isVisible: false,
    intireTrack: {
        id: null, //number
        dataTrack: null, //array
        isFetching: false //Boolean
    }
}

const tracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRACKS:
            return {
                ...state,
                tracks: action.tracks,
                isFetching: true
            }
        case SET_VISIBLE:
            return {
                ...state,
                isVisible: true
            }
        case SET_INTIRE_TRACK:
            return {
                ...state,
                intireTrack: {
                    ...state.intireTrack,
                    id: action.id
                }

            }
        case SET_INTIRE_TRACK_DATA:
            return {
                ...state,
                intireTrack: {
                    ...state.intireTrack,
                    dataTrack: action.data,
                    isFetching: true,
                }
            }
        case RESET_DATA_ALL_TRACKS:
            return {
                ...state,
                tracks: null,
                isFetching: false,
                isVisible: false,
                intireTrack: {
                    ...state.intireTrack,
                    id: null, //number
                    dataTrack: null, //array
                    isFetching: false //Boolean
                }
            }
        default:
            return {
                ...state
            }
    }
}

export const setEntireTrack = (id) => {
    return {
        type: SET_INTIRE_TRACK,
        id
    }
}

export const setDataEntireTrack = (data) => {
    return {
        type: SET_INTIRE_TRACK_DATA,
        data
    }
}

export const resetAllDataTrack = () => {
    return {
        type: RESET_DATA_ALL_TRACKS
    }
}


export const setAllTracks = (tracks) => {
    return {
        type: SET_TRACKS,
        tracks
    }
}

export const setVisibleTracks = () => {
    return {
        type: SET_VISIBLE
    }
}

export default tracksReducer;