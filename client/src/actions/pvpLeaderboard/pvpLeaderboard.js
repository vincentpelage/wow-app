import {
    GET_PVP_LEADERBOARD,
    GET_PVP_LEADERBOARD_FROM_API,
    SET_LOADER_PVP
} from "./actionTypes";

export const getPvpLeaderboard = () => dispatch => {
    dispatch({
        type: GET_PVP_LEADERBOARD,
    });
};

export const getPvpLeaderboardFromAPi = data => dispatch => {
    dispatch({
        type: GET_PVP_LEADERBOARD_FROM_API,
        payload: data
    });
};

export const setLoaderPvp = bool => dispatch => {
    dispatch({
        type: SET_LOADER_PVP,
        isLoading: bool
    });
};
