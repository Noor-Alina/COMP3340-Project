<<<<<<< HEAD
import Footer from '../components/Footer';
import Header from '../components/Header';
import Canada from '../assets/images/canada-flag.png'
import React, { Component } from 'react';
import Modal from './Modal.js';

class Home extends Component {
    constructor() {
        super();
        this.state = {
          show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
      }
    
      showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };
=======
import React from 'react';
>>>>>>> 1c06305120c35489bc2d5671e868ae3d6a305883

    render() {
        return (
        <div>
            <br/>
                <div className = "row">
                    <div className = "col-md-8">
                        <form className="search-bar">
                            <input type="text" placeholder="Search..." name="search-button" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className = "col-md-2">
                        <img src={Canada} />
                        <div classname="flag" alt="country selector"></div>
                    </div>
                </div>
        <h1>React Modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          Open
        </button>
            <br/>
        </div>
        );
    }
}

export default Home;