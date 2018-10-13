import {
  GET_RAIDS_ACHIEVEMENTS,
  GET_RAIDS_ACHIEVEMENTS_FROM_API,
  SET_LOADER
} from "./actionTypes";

export const getRaidsAchievements = (
  characterName,
  characterKingdom,
  characterRegion
) => dispatch => {
  dispatch({
    type: GET_RAIDS_ACHIEVEMENTS,
    payload: { characterName, characterKingdom, characterRegion }
  });
};

export const getRaidsAchievementsFromAPi = data => dispatch => {
  dispatch({
    type: GET_RAIDS_ACHIEVEMENTS_FROM_API,
    payload: data
  });
};

export const setLoader = bool => dispatch => {
  dispatch({
    type: SET_LOADER,
    isLoading: bool
  });
};
