import { combineReducers } from "redux";
import dungeonsAchievements from "./dungeonsAchievements";
import raidsAchievements from "./raidsAchievements";
import form from "./form";

export default combineReducers({
  dungeonsAchievements,
  raidsAchievements,
  form
});
