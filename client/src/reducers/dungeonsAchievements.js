import {
  GET_DUNGEONS_ACHIEVEMENTS_FROM_API,
  SET_LOADER
} from "../actions/dungeonsAchievements/actionTypes";

const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DUNGEONS_ACHIEVEMENTS_FROM_API:
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
