import {ADD_NAME} from "../actions/names.action";

export function namesReducer(state = [{name:'alice', age: '17'}], action) {

    switch (action.type){
        case ADD_NAME:
            return [...state, action.payload];
        default:
            return state;
    }
}