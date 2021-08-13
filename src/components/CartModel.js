import { Button } from 'bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseitemQuantity, increaseitemQuantity, removeFromCart } from '../actions'

function CartModel({name, price, id, quantity, desc, img}) {
    const dispatch= useDispatch()
    const items = useSelector((state) => state.items.cart);

    const handleRemoveFromCart=()=>{
        dispatch(removeFromCart(id))
    }
    
     
   const IncreaseQuantity=()=>{
  
        dispatch(increaseitemQuantity(id))
     
   }

   const DecreaseQuantity=()=>{
    if(quantity<=1){
        dispatch(removeFromCart(id))
    }
        dispatch(decreaseitemQuantity(id))

     
      
   }

    return (
        <><div>
            
            <Card style={{ width: '18rem', marginBottom: '2rem' }}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div> $ {price}</div> <button 
                    onClick={IncreaseQuantity}>+</button>   <span>{quantity}</span>   <button 
                    onClick={DecreaseQuantity}>-</button><br />
                    <button onClick={handleRemoveFromCart} >Remove</button>
                </Card.Body>
            </Card>

        </div>
        <div>
            
        </div>
        
        </>
    )
}

export default CartModel
