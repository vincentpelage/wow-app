import { SIMPLE_ACTION } from "../actions/simpleTool/actionTypes"
import { ANOTHER_ACTION } from "../actions/simpleTool/actionTypes"

export default (state = {}, action) => {
  switch (action.type) {
    case SIMPLE_ACTION:
      return {
        ...state,
        result: action.payload
      };
    case ANOTHER_ACTION:
      return {
        ...state,
        randNumber: action.payload
      };
    default:
      return state;
  }
};
