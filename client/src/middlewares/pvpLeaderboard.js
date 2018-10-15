import axios from "axios";

import { GET_PVP_LEADERBOARD } from "../actions/pvpLeaderboard/actionTypes";
import { getPvpLeaderboardFromAPi } from "../actions/pvpLeaderboard/pvpLeaderboard";
import { setLoader } from "../actions/dungeonsAchievements/dungeonsAchievements";

const dungeonAchievementsMiddleware = store => next => action => {
    switch (action.type) {
        case GET_PVP_LEADERBOARD: {
            store.dispatch(setLoader(true));
            console.log('middleware')
            axios
                .get("/pvpLeaderBoard")
                .then(({ data }) => {
                    store.dispatch(getPvpLeaderboardFromAPi(data), setLoader(false));
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
