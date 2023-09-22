import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sideBarCardsReducer from "./reducers/sideBarReducer";
import filterListReducer from "./reducers/filterListsReducer";

let rootReduce = combineReducers({
    sideBar: sideBarCardsReducer,
    filterButtons: filterListReducer
})



let store = configureStore({ reducer: rootReduce })

export default store