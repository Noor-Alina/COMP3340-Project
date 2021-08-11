const itemsToCartReducer=(state={cart:[]}, action)=>{
    switch(action.type){
        case "SET_ITEMS_TO_CART":
           return  { 
            ...state,
            cart: [...state.cart, action.payload]
        }

        case "REMOVE_FROM_CART":
            console.log(`payload: ${action.payload}`)
            const index = state.cart.findIndex(
              (cartItem) => cartItem.id === action.payload
            );
            let newCart = [...state.cart];
            if (index >= 0) {
                newCart.splice(index, 1);
      
            } else {
              console.log(
                `Cant remove product (id: ${action.id}) as its not in basket!`
              )
            }
      
            return {
              ...state,
              cart: newCart
            }
        
        case "INCREASE_ITEM_QUANTITY":
             
            let newCart1 = state.cart.map((item)=>{
                if(item.id===action.payload){
                    item.quantity= item.quantity+1
                }
                return item
            })
                return  {
                    ...state,
                    cart: newCart1
                }

        case "DECREASE_ITEM_QUANTITY":
             
            let newCart2 = state.cart.map((item)=>{
                if(item.id===action.payload){
                    item.quantity= item.quantity-1
                }
                return item
            })
                return  {
                    ...state,
                    cart: newCart2
                }
        default:
            return state;
    }
}

export const getCartTotal = (cart) => 
cart?.reduce((amount, item) => {const itemPrice= parseFloat(item.price)
return itemPrice * item.quantity + amount
}, 0);

export default itemsToCartReducer;