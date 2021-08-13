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
              
            <div style={{marginTop: 20}} className="r-flex align-items-center justify-content-center margin-top:5">
                <br/>
                    <form className="search-bar">
                        <input type="text" placeholder="Search..." name="search-button" />
                        <button type="submit">Submit</button>
                    </form>
                <br/>
            </div>
                <br /><br />

            <ul className="flex-container wrap">
                {users.map(user =>
                <ol className="flex-item">
                    <Card style={{ width: '18rem', marginBottom: '2rem'}}>
                        <Card.Img variant="top" src={user.img} />
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Text>{user.desc}</Card.Text>
                               <div> $ {user.price}</div><br />
                                <Button onClick={()=>{addItemToCart(user)}} variant="primary">Add to Cart</Button>
                            </Card.Body>
                    </Card>
                </ol>
                )}
            </ul>
            <div className=" family-sans bg-success ">
                <h2 style={{ color: '#000', marginBottom: '2rem'}}>Suggested Websites</h2>
                <GetList productList={productList} />    
            </div>                
        </div>
        );
    }


export default Home;