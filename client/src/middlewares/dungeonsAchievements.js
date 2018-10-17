import axios from "axios";

import { GET_DUNGEONS_ACHIEVEMENTS } from "../actions/dungeonsAchievements/actionTypes";
import { getDungeonAchievementsFromAPi } from "../actions/dungeonsAchievements/dungeonsAchievements";
import { setLoader } from "../actions/dungeonsAchievements/dungeonsAchievements";

const dungeonAchievementsMiddleware = store => next => action => {
  switch (action.type) {
    case GET_DUNGEONS_ACHIEVEMENTS: {
      store.dispatch(setLoader(true));
      axios
        .post("/dungeonsAchievements", {
          form: {
            characterName: action.payload.characterName,
            characterKingdom: action.payload.characterKingdom,
            characterRegion: action.payload.characterRegion
          }
        })
        .then(({ data }) => {
          store
            .dispatch(getDungeonAchievementsFromAPi(data), setLoader(false))
        })
        .catch((e) => {
          console.log(e);
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
