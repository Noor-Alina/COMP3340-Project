import React from 'react';
import firebase from '../components/Firebase';
import {Card, ListGroup} from 'react-bootstrap'

export default class About extends React.Component{

    constructor(props){
        super();
        this.state = {
          userName : null,
          email : null
        }
    }
      
    componentDidMount () {
        firebase.auth().onAuthStateChanged( FBUser => {
            if (FBUser) {
                this.setState({
                    userName: FBUser.displayName,
                    email: FBUser.email,

                })
            } 
        });
    }

    render() {
        return (
            <div style={{marginTop: 20}} className="d-flex align-items-center justify-content-center margin-top:5">
                <Card className="text-center">
                <Card.Header> Profile </Card.Header>
                <Card.Body>
                    <ListGroup>
                        <ListGroup.Item variant="success">Username: {this.state.userName}</ListGroup.Item>
                        <ListGroup.Item style={{marginTop: 20}} variant="primary">Email: {this.state.email}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                <Card.Footer className="text-muted"> EcoShopper </Card.Footer>
                </Card>
          </div>
        );
    }
}