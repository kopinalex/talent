import {CHANGE_NAME, SET_NAME_DEFINED} from "../actions/actionTypes";

const InitialState = {
    name: 'Man without name',
    nameIsSet: false
};
const infoReducer = (state = InitialState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state, name: action.payload};
        case SET_NAME_DEFINED:
            return{...state, nameIsSet: action.payload};
        default:
            return state;
    }
};

export default infoReducer;