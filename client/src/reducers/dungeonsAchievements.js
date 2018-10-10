import {
  GET_DUNGEONS_ACHIEVEMENTS,
  GET_DUNGEONS_ACHIEVEMENTS_FROM_API
} from "../actions/dungeonsAchievements/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_DUNGEONS_ACHIEVEMENTS:
      return {
        ...state,
        result: action.payload
      };
    case GET_DUNGEONS_ACHIEVEMENTS_FROM_API:
      return {
        ...state,
        resultAPI: action.payload,
        data: action.data
      };
    default:
      return state;
  }
};
