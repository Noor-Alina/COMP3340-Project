import { Button } from 'bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseitemQuantity, increaseitemQuantity, removeFromCart } from '../actions'

function CartModel({name, price, id, quantity}) {
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
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>

                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
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
