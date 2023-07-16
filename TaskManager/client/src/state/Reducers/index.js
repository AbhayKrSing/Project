import { combineReducers } from "redux";
import Authenticate from "./reducers";

const Rootreducer = combineReducers({
    User: Authenticate,
})

export default Rootreducer