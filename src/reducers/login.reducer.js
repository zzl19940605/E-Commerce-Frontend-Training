import {LOGIN} from "../actions/login.action";


export default function loginReducer(state = null, action) {
    console.log('state:',state,'action', action);
    switch (action.type){
        case LOGIN:
            return action.payload.success ? action.payload.user : null;
        default:
            return state;
    }
}