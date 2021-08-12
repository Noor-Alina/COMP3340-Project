import React from 'react';
import {Card, Button} from 'react-bootstrap'
import {withRouter} from 'react-router';

function NotFound(props) {
    return (
        <div style={{marginTop: 20}} className="d-flex align-items-center justify-content-center margin-top:5">
            <Card className="text-center">
            <Card.Header> Oops, Content Not Found </Card.Header>
            <Card.Body>
            <Card.Title>Click link below</Card.Title>
            <Button variant="success" onClick={() => props.history.push("/")}> Continue to Homepage </Button>
            </Card.Body>
            <Card.Footer className="text-muted"> EcoShopper </Card.Footer>
            </Card>
        </div>
    );
}


export default withRouter(NotFound)