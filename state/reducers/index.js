import { combineReducers } from "redux";
import menuDrawerReducer from "./menu-drawer-reducer";
import musicData from "./music-data-reducer";

const reducers = combineReducers({
  menuState: menuDrawerReducer,
  musicData : musicData
});

export default reducers;
