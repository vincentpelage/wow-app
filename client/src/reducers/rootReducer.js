import { combineReducers } from "redux";
import dungeonsAchievements from "./dungeonsAchievements";
import raidsAchievements from "./raidsAchievements";

export default combineReducers({
  dungeonsAchievements,
  raidsAchievements
});
