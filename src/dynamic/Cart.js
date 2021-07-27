import React from "react";
import { useSelector } from "react-redux";
import CartModel from "../components/CartModel";
import "./Cart.css";
import Subtotal from "./Subtotal";

function Cart() {
  const items = useSelector((state) => state.items.cart);
  console.log(items);

  return (
    <div>
      

      
      <div className="cartModelWrapper">
        {items.map((item) => {
          return <CartModel name={item.name} price={item.price} id={item.id} quantity={item.quantity} />;
        })}
      </div>
      <div className="checkout-right"><Subtotal /></div>

      <div>
        <>
          <hr></hr>
        </>
    
      </div>
    </div>
  );
}

export default Cart;
