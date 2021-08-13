import React from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import { setItemsToCart } from '../actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Home() {
    let history = useHistory();

    const [users, setUsers]= useState([])
   useEffect(()=>{
    axios.get("/products").then((response) => {
        setUsers(response.data)
    });
   },[])

   const dispatch= useDispatch()

   const addItemToCart=(user)=>{
        dispatch(setItemsToCart(user))
   }

   const getProduct=(id) => {
       console.log(id);
       history.push('/Product', id);
    }
   

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
                  <a style={{ cursor: 'pointer' }} onClick={()=>getProduct(user.id)}> 
                <ol className="flex-item">
                    <Card style={{ width: '18rem', marginBottom: '2rem'}}>
                        <Card.Img variant="top" src="holder.js/100px180" />
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
                </a> 
                )}
            </ul>               
        </div>
        );
    }


export default Home;