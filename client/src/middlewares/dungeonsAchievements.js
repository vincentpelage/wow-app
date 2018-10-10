import axios from "axios";

import { GET_DUNGEONS_ACHIEVEMENTS } from "../actions/dungeonsAchievements/actionTypes";
import { dungeonAchievementsActionFromAPi } from "../actions/dungeonsAchievements/dungeonsAchievements";

const dungeonAchievementsMiddleware = store => next => action => {
  switch (action.type) {
    case GET_DUNGEONS_ACHIEVEMENTS: {
      axios
        .post("/dungeonsAchievements", {
          form: {
            characterName: action.inputData.characterName,
            characterKingdom: action.inputData.characterKingdom,
              characterRegion: action.inputData.characterRegion,
          }
        })
        .then(({ data }) => {
          store.dispatch(dungeonAchievementsActionFromAPi(data));
        })
        .catch(() => {
          console.log("Request did not work");
        });
      break;
    }
    default:
    // console.log(action);
  }

  next(action);
};

/*
 * Export default
 */
export default dungeonAchievementsMiddleware;
