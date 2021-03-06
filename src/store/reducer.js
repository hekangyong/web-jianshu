import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../components/Header/store";
import { reducer as homeReducer } from "../pages/Home/store";
import { reducer as detailReducer } from "../pages/Details/store";
import { reducer as LoginReducer } from "../pages/Login/store";

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: LoginReducer,
});
