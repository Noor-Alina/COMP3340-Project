import { Button } from 'bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CartModel from '../components/CartModel'
import './Cart.css'

function Cart() {

    const items= useSelector(state=> state.items.arr)
    console.log(items)


    
    return (
        <div>
          <aside>
              <h1>Total</h1>
              <div className="checkout">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
            </aside>
           <div className="cartModelWrapper" >
               {
                   items.map((item)=>{
                       return <CartModel name={item.name} price={item.price} />
                   })
               }
           </div>
           <div>
           <>
            <hr></hr>
            
            
          </>
           </div>
           
           
            
        </div>
        
    )
}

export default Cart
