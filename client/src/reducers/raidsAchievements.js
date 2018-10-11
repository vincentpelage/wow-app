import { GET_RAIDS_ACHIEVEMENTS_FROM_API } from "../actions/raidsAchievements/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_RAIDS_ACHIEVEMENTS_FROM_API:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
