import React from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import { increaseitemQuantity, setItemsToCart } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import GetList from '../components/GetList';

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
       
   }
   
   const [productList, setProductList] = useState([]);
   useEffect(() => {
       async function fetchProductList(){
         try{
             const requestUrl = 'https://610460b13356ea001748f777.mockapi.io/api/product';
             const response = await fetch(requestUrl);
             const responseJSON = await response.json();
             console.log(responseJSON);
             setProductList(responseJSON);
         }catch{

         }  
       }
       fetchProductList();
   },[]);


        return (
        <div>
            <div className = "row">
                    <div className = "col-md-8">
                        <form className="search-bar">
                            <input type="text" placeholder="Search..." name="search-button" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <br /><br />

                
            
            <ul className="flex-container wrap">
                {users.map(user =>
                <ol className="flex-item">
                    <Card style={{ width: '18rem', marginBottom: '2rem'}}>
                        <Card.Img variant="top" src={user.img} />
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
                </ol>
                )}
            </ul>                
        </div>
        );
    }


export default Home;