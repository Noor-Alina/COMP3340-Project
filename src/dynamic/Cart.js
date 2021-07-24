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
           <div className="cartModelWrapper" >
               {
                   items.map((item)=>{
                       return <CartModel name={item.name} email={item.email} />
                   })
               }
           </div>
        </div>
    )
}

export default Cart
