import {CHANGE_NAME, SET_NAME_DEFINED} from "./actionTypes";

export function setName(name) {
    return {type: CHANGE_NAME, payload: name}
}

export function setNameDefined(isDefine) {
    return {type: SET_NAME_DEFINED, payload: isDefine}
}

