export const setItemsToCart=(pl)=>{
    return{
        type: 'SET_ITEMS_TO_CART',
        payload: pl
    }
}

export const removeFromCart=(pl)=>{
    return{
        type: 'REMOVE_FROM_CART',
        payload: pl
    }
}

export const increaseitemQuantity=(pl)=>{
    return{
        type: 'INCREASE_ITEM_QUANTITY',
        payload: pl
    }
}

export const decreaseitemQuantity=(pl)=>{
    return{
        type: 'DECREASE_ITEM_QUANTITY',
        payload: pl
    }
}