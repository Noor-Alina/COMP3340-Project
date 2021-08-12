import React from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import { increaseitemQuantity, setItemsToCart } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
    
    const [users, setUsers]= useState([])
        useEffect(()=>{
            axios.get("/products").then((response) => {
                setUsers(response.data)
            });
        },[])
   const items = useSelector((state) => state.items.cart);

   const dispatch= useDispatch()

   const addItemToCart=(user)=>{

   const index = items.findIndex(
        (cartItem) => cartItem.id === user.id
      );

      if (index >= 0) {
          console.log(user.id)
           dispatch(increaseitemQuantity(user.id))

      } else {
        dispatch(setItemsToCart(user))
   }

   function getProduct(id) {
       console.log(id);
   }
   
        return (
        <div>
              
            <div style={{marginTop: 20}} className="r-flex align-items-center justify-content-center margin-top:5">
                <br/>
                    <form className="search-bar">
                        <input type="text" placeholder="search..." name="search-button" />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                <br/>
            </div>
                <br /><br />

            <ul className="flex-container wrap">
                {users.map(user =>
                <ol className="flex-item">
                    <a style={{ cursor: 'pointer' }} onClick={()=>getProduct(user.id)}>
                        <Card style={{ width: '18rem', marginBottom: '2rem'}}>
                            <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title>{user.name}</Card.Title>
                                    <Card.Text>
                                        {user.email}
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <div> $ {user.price}</div><br />
                                    <Button onClick={()=>{addItemToCart(user)}} variant="primary">Add to Cart</Button>
                                </Card.Body>
                        </Card>
                    </a>
                </ol>
                )}
            </ul>                
        </div>
        );
    }


export default Home;