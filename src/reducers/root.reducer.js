import {combineReducers} from "redux";
import {namesReducer} from "./names.reducer";
import {productsReducer} from "./products.reducer";
import {reducer as formReducer} from "redux-form";
import loginReducer from "./login.reducer";
export const rootReducer = combineReducers({
    names: namesReducer,
    products: productsReducer,
    user: loginReducer,
    form: formReducer //provide store to redux form
});