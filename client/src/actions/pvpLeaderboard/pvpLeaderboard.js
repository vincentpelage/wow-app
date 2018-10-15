import {
    GET_PVP_LEADERBOARD,
    GET_PVP_LEADERBOARD_FROM_API,
    SET_LOADER
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

export const setLoader = bool => dispatch => {
    dispatch({
        type: SET_LOADER,
        isLoading: bool
    });
};
