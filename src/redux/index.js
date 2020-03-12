import {combineReducers} from "redux";
import commentsReducer from "./comments/commentsReducer";


export default combineReducers({
    comments:commentsReducer
})
