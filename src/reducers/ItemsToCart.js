const itemsToCartReducer=(state={arr:[]}, action)=>{
    switch(action.type){
        case "SET_ITEMS_TO_CART":
           return  { 
            ...state,
            arr: [...state.arr, action.payload]
        }
        default:
            return state;
    }
}

export default itemsToCartReducer;