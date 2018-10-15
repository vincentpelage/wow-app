import { SET_INPUT } from "./actionTypes";

export const setInput = (inputType, data) => dispatch => {
    dispatch({
        type: SET_INPUT,
        inputType,
        payload: data
    });
};