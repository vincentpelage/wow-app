import {
  GET_DUNGEONS_ACHIEVEMENTS,
  GET_DUNGEONS_ACHIEVEMENTS_FROM_API
} from "./actionTypes";

export const dungeonAchievementsAction = (
  characterName,
  characterKingdom
) => dispatch => {
  dispatch({
    type: GET_DUNGEONS_ACHIEVEMENTS,
    payload: "result_of_dungeon_achievements",
    inputData: { characterName, characterKingdom }
  });
};

export const dungeonAchievementsActionFromAPi = data => dispatch => {
  dispatch({
    type: GET_DUNGEONS_ACHIEVEMENTS_FROM_API,
    payload: "result_of_dungeon_achievements_from_API",
    data: data
  });
};
