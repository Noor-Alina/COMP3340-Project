import React from 'react';
import {Card, Button} from 'react-bootstrap'
import {withRouter} from 'react-router';

function RegistrationsSuccess(props) {

  return (
      <div style={{marginTop: 20}} className="d-flex align-items-center justify-content-center margin-top:5">
        <Card className="text-center">
          <Card.Header>Congratulations!!! {props.name} </Card.Header>
          <Card.Body>
            <Card.Title>Your profile has been created successfully!!</Card.Title>
            <Card.Text>
              Please click on button below to enjoy work class online shopping experience
            </Card.Text>
            <Button variant="success" onClick={() => props.history.push("/")}> Continue to Homepage </Button>
          </Card.Body>
          <Card.Footer className="text-muted"> EcoShopper </Card.Footer>
        </Card>
      </div>
    );
}

export default withRouter(RegistrationsSuccess)