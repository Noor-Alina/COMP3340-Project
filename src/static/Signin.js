import React from 'react';
import {withRouter} from 'react-router';

import firebase from '../components/Firebase';
import 'bootstrap/dist/css/bootstrap.css';

class Signin extends React.Component{
  constructor(){
    super();
    this.state = {
      email : '',
      password : '',
      errorMessage : null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;
    this.setState ({
      [itemName] : itemValue });
  }

  handleSubmit (e) {
    var registrationInfo = {
      email : this.state.email,
      password: this.state.password
    }
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(
      registrationInfo.email,
      registrationInfo.password
    ).then (() => {
        this.props.history.push("/");
    })
    .catch( error => {
      if (error.message !== null){
        this.setState({ errorMessage : error.message  })
      } else {
        this.setState({ errorMessage : null })
      }
    });
  }

  renderError () {
    return (
        <div className="col-12 alert alert-danger px-3 ">
          {this.state.errorMessage}
        </div>
    );
  }

  render () {
    return (
        <div> 
            <form className="mt-3" onSubmit={this.handleSubmit}>
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                        <div className="card bg-light">
                            <div className="card-body">
                            <h3 className="text-center font-weight-light mb-3">Log in</h3>
                            <section className="form-group">
                            { this.state.errorMessage && this.renderError }
                                <label
                                className="form-control-label sr-only"
                                htmlFor="Email">
                                Email
                                </label>
                                <input
                                required
                                className="form-control"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                />
                            </section>
                            <section className="form-group">
                                <input
                                required
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                />
                            </section>
                            <br />
                            <div className="text-center mb-6">  
                                <button className="btn btn-success" type="submit"  style={{textAlign: 'center'}}>
                                Log in
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </form>
        </div>
    );
  }
}

export default withRouter(Signin)
