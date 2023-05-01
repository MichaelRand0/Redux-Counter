import { combineReducers } from "redux";
import counterReducer from "./counter";
import authReducer from "./auth";

const allReducers = combineReducers({
  counter: counterReducer,
  auth: authReducer
})

export default allReducers