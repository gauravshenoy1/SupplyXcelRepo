import { combineReducers } from "redux";
import { UserReducer } from "./user";

export const rootReducer =combineReducers({
    user:UserReducer,
})