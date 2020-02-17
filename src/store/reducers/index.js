import { combineReducers } from "redux";
import { authReducer } from "../auth/reducers";
​
export default combineReducers({
  auth: authReducer,
});
