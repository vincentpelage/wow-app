import {
  GET_DUNGEONS_ACHIEVEMENTS,
  GET_DUNGEONS_ACHIEVEMENTS_FROM_API,
  SET_LOADER
} from "./actionTypes";

export const getDungeonAchievements = (
  characterName,
  characterKingdom,
  characterRegion
) => dispatch => {
  dispatch({
    type: GET_DUNGEONS_ACHIEVEMENTS,
    payload: { characterName, characterKingdom, characterRegion }
  });
};

export const getDungeonAchievementsFromAPi = data => dispatch => {
  dispatch({
    type: GET_DUNGEONS_ACHIEVEMENTS_FROM_API,
    payload: data
  });
};

export const setLoader = bool => dispatch => {
  dispatch({
    type: SET_LOADER,
    isLoading: bool
  });
};
