import { Button } from 'bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'

function CartModel({name, price}) {

  
    return (
        <><div>
            {/* <div>
        <img src="" alt="" />
    </div>
    <div>{name}</div>
    <div>{email}</div> */}
            <Card style={{ width: '18rem', marginBottom: '2rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>

                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <div> $ {price}</div><br />
                </Card.Body>
            </Card>

        </div>
        <div>
            
        </div>
        
        </>
    )
}

export default CartModel
