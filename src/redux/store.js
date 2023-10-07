import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sideBarCardsReducer from "./reducers/sideBarReducer";
import filterListReducer from "./reducers/filterListsReducer";
import tracksReducer from "./reducers/songsReducer";

let rootReduce = combineReducers({
    sideBar: sideBarCardsReducer,
    filterButtons: filterListReducer,
    tracksHalf: tracksReducer
})



let store = configureStore({ reducer: rootReduce })

window.store = store

export default store