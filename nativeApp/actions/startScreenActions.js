import {CHANGE_NAME} from "./actionTypes";

export function setName(name) {
    return{type: CHANGE_NAME, payload: name}
}