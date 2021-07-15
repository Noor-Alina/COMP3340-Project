import React from 'react';
import {Modal, Button} from 'react-bootstrap'

function RegistrationsModal(props) {

  return (
      <>
        <Modal show={props.show} centered backdrop="static" onHide={props.handleClose}>
          <Modal.Body>
            <div className="text-success px-5">
              <h4>Welcome {props.displayName}. </h4>
              <h4>Congratulations your profile has been created successfully!! </h4>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={props.handleClose}>
              Continue to Homepage
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
  
export default RegistrationsModal