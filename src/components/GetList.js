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
        <table className="center">
            <tr>
                <th style={{textAlign: 'center'}}>Website</th>
                <th style={{textAlign: 'center'}}>URL</th>
            </tr>
            <tr>
                <td><ul className="post-list" style={{decor: 'center'}}> 
            {productList.map(post => (
                <li key={post.id}>{post.website}</li>
                
            ))}
            
        </ul></td>
                <td><ul className="post-list">{productList.map(post => (
                <li key={post.id}>{post.url}</li>
                
            ))}</ul></td>
                
            </tr>
            
        </table>
        
        
    );
}

export default GetList;