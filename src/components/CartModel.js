import { Button } from 'bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'

function CartModel({name, email}) {
    return (
        <div>
            {/* <div>
                <img src="" alt="" />
            </div>
            <div>{name}</div>
            <div>{email}</div> */}
            <Card style={{ width: '18rem', marginBottom: '2rem',  marginLeft: '1rem', marginRight: '1rem'}}>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    {email}
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <button>Checkout</button>
                            </Card.Body>
                </Card>
        </div>
    )
}

export default CartModel
