import { ANOTHER_ACTION } from "../simpleTool/actionTypes"

export const anotherAction = () => dispatch => {
  dispatch({
    type: ANOTHER_ACTION,
    payload: Math.random() * (10)
  });
};
