import React from 'react';
import propTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';


GetList.propTypes = {
    productList: propTypes.array,

};
GetList.defaultProps = {
    productList: [],
}

function GetList(props) {
    const { productList } = props;
    return (
        <ul className="post-list"> 
            {productList.map(post => (
                <li key={post.id}>{post.name}{post.img}</li>
                
            ))}
        </ul>
    );
}

export default GetList;