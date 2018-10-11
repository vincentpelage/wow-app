import { GET_DUNGEONS_ACHIEVEMENTS_FROM_API } from "../actions/dungeonsAchievements/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_DUNGEONS_ACHIEVEMENTS_FROM_API:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
