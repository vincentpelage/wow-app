import {
    SET_INPUT,

} from "../actions/form/actionTypes";

const initialState = {
    characterName: "",
    characterKingdom: "",
    characterRegion: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_INPUT:
            return {
                ...state,
                [action.inputType]: action.payload
            };

        default:
            return state;
    }
};
