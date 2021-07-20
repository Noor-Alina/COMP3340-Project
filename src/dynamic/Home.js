import React from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import Product from '../dynamic/Product';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        axios.get("/products").then((response) => {
            this.setState({ users: response.data });
        });
    }
    render() {
        const { users } = this.state;
        console.log(users);

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
                <br></br>
            <ul className="flex-container wrap">
                {users.map(user =>
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
                                <Button variant="primary" >Add to Cart</Button>
                            </Card.Body>
                    </Card>
                </ol>
                )}
            </ul>                
        </div>
        );
    }
}

export default Home;