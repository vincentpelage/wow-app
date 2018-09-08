import { SIMPLE_ACTION } from "./actionTypes"
import { ANOTHER_ACTION } from "./actionTypes"

export const simpleAction = () => dispatch => {
    dispatch({
        type: SIMPLE_ACTION,
        payload: 'result_of_simple_action'
    })
}

export const anotherAction = () => dispatch => {
    dispatch({
        type: ANOTHER_ACTION,
        payload: Math.random() * (10)
    });
};