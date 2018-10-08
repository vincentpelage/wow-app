import axios from "axios";

import { GET_DUNGEONS_ACHIEVEMENTS } from "../actions/dungeonsAchievementsTool/actionTypes";
import { dungeonAchievementsActionFromAPi } from "../actions/dungeonsAchievementsTool/dungeonAchievementsAction";

const dungeonAchievementsMiddleware = store => next => action => {
  switch (action.type) {
    case GET_DUNGEONS_ACHIEVEMENTS: {
      axios
        .post(
          "/dungeonsAchievements",
          {
            nickname: "skiel",
            kingdom: "archimonde"
          }
        )
        .then(({ data }) => {
            // console.log(data);
            store.dispatch(dungeonAchievementsActionFromAPi(data));
        })
        .catch(() => {
          console.log('Request did not work');
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
