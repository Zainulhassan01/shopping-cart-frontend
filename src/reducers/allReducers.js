import userReducer from "./userReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  users: userReducer,
  cart: cartReducer,
});
export default allReducers;
