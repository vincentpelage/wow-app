import axios from "axios";

import { GET_RAIDS_ACHIEVEMENTS } from "../actions/raidsAchievements/actionTypes";
import { getRaidsAchievementsFromAPi } from "../actions/raidsAchievements/raidsAchievements";

const raidAchievementsMiddleware = store => next => action => {
  switch (action.type) {
    case GET_RAIDS_ACHIEVEMENTS: {
      console.log("inside middleware");
      axios
        .post("/raidsAchievements", {
          form: {
            characterName: action.payload.characterName,
            characterKingdom: action.payload.characterKingdom,
            characterRegion: action.payload.characterRegion
          }
        })
        .then(({ data }) => {
          console.log("data", data);
          store.dispatch(getRaidsAchievementsFromAPi(data));
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
export default raidAchievementsMiddleware;
