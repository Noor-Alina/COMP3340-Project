import { combineReducers } from "redux";
import itemsToCartReducer from "./ItemsToCart";

const allReducers= combineReducers({
    items: itemsToCartReducer
})

export default allReducers