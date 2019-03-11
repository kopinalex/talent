import {CHANGE_NAME} from "../actions/actionTypes";

const InitialState = {
    name: 'Man without name'
};
const infoReducer = (state = InitialState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state, name: action.payload}
        default:
            return state;
    }
};

export default infoReducer;