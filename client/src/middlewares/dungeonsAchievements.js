import axios from "axios";

import { GET_DUNGEONS_ACHIEVEMENTS } from "../actions/dungeonsAchievements/actionTypes";
import { getDungeonAchievementsFromAPi } from "../actions/dungeonsAchievements/dungeonsAchievements";

const dungeonAchievementsMiddleware = store => next => action => {
  switch (action.type) {
    case GET_DUNGEONS_ACHIEVEMENTS: {
      axios
        .post("/dungeonsAchievements", {
          form: {
            characterName: action.payload.characterName,
            characterKingdom: action.payload.characterKingdom,
            characterRegion: action.payload.characterRegion
          }
        })
        .then(({ data }) => {
          console.log("data", data);
          store.dispatch(getDungeonAchievementsFromAPi(data));
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
