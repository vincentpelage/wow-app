import {
    GET_PVP_LEADERBOARD_FROM_API,
    SET_LOADER
} from "../actions/pvpLeaderboard/actionTypes";

const initialState = {
    isLoading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PVP_LEADERBOARD_FROM_API:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case SET_LOADER:
            return {
                ...state,
                isLoading: action.isLoading
            };
        default:
            return state;
    }
};
