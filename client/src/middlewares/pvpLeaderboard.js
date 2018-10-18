import axios from "axios";

import { GET_PVP_LEADERBOARD } from "../actions/pvpLeaderboard/actionTypes";
import { getPvpLeaderboardFromAPi } from "../actions/pvpLeaderboard/pvpLeaderboard";
import { setLoaderPvp } from "../actions/pvpLeaderboard/pvpLeaderboard";

const pvpLeaderboardMiddleware = store => next => action => {
  switch (action.type) {
    case GET_PVP_LEADERBOARD: {
      store.dispatch(setLoaderPvp(true));
      axios
        .get("/pvpLeaderBoard")
        .then(({ data }) => {
          store.dispatch(getPvpLeaderboardFromAPi(data), setLoaderPvp(false));
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
export default pvpLeaderboardMiddleware;
