import { combineReducers } from "redux";
import changetheme from "./reducers";

const Rootreducer = combineReducers({
    change: changetheme,
})

export default Rootreducer