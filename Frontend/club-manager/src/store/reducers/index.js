import { combineReducers } from "redux";
import auth from "./auth";
import club from "./club";
import event from "./event";

export default combineReducers({
    auth, club, event
})