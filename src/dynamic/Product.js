import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Product ({id}) {

    const location = useLocation();
    {location.state}
    
    const [users, setUsers]= useState([])
   useEffect(()=>{
    axios.get("/products").then((response) => {
        setUsers(response.data)
    });
    console.log();
   },[]);


    return (
        <div>
        </div>            
    );
}

export default Product;