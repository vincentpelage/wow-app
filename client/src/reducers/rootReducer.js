import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import dungeonAchievementsReducer from "./dungeonAchievementsReducer";

export default combineReducers({
  simpleReducer,
  dungeonAchievementsReducer
});
