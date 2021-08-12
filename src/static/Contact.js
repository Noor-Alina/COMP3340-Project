import Footer from '../components/Footer';
import Header from '../components/Header';
import React from 'react';
import axios from 'axios';
import GoogleMap from './GoogleMap';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fname: '', lname: '', email: '', message: '' }
  }
  handleSubmit(e) {
    e.preventDefault();

    axios({
      method: "POST",
      mailto: "ecoshopper@gmail.com",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
  resetForm() {
    this.setState({ fname: '', lname: '', email: '', message: '' })
  }

  //test test

  render() {
    return (
      <div>

        <div className="float-container">
        <div className="float-child contact-in">
        <h2 className="contact-h1">Contact-Info</h2>
          <div className="contact-form">
          <h4 className="cinfo"><strong><i className="heading">Phone :</i>+1 226-987-4532</strong></h4>
          <h4 className="cinfo"><strong><i className="heading">Email : </i>ecoShopper@gmail.com</strong></h4>
          <h4 className="cinfo"><strong><i className="heading">Location :   </i>Windsor, ON</strong></h4>
          <div>
          <img src="/images/efp.jpg " alt="Eco friendly" height="445px"/>
          </div>
          </div>
        </div>
        <div className="float-child">
          <div>
            <h2 className="contact-h1">Contact-Us Form</h2>
          </div>
          <section>
            <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <label className="contact-label" for="fname" > First Name: <input className="contact-input" type="text" placeholder="First Name" required /> </label><br />
              <label className="contact-label" for="lname" > Last Name: <input className="contact-input" type="text" placeholder="Last Name" required /> </label><br />
              <label className="contact-label" for="email-id">Email Id: <input className="contact-input" type="email" aria-describedby="emailHelp" placeholder="Email Address" required /></label><br />
              <label className="contact-label" for="message">Message: <br /><textarea className="contact-text" class="c-control" rows="5" cols="45" placeholder="Your Message" required></textarea> </label><br />
              <button className="btn btn-success" type="submit">Submit</button>&nbsp;
              <button className="btn btn-success" type="reset">Reset</button>
              <div>
                <br />
              </div>
            </form>
          </section>
        </div>
        </div>
        
        <br />
        
        <br />
        <h2>Google-Map</h2>
        <div className="map-main" >
          <GoogleMap />
        </div>
        <div className="thankyou">
          <h1><i>Thank you for contacting EcoShopper!!</i></h1>
        </div>
        <br />

        <br />
        <div style={{marginTop: 20}} className="d-flex align-items-center justify-content-center margin-top:5">
                Contact
            </div> 
        <section>
          <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <label className="contact-label" for="fname" > First Name: <input className="contact-input" type="text" placeholder="First Name" required /> </label><br />
            <label className="contact-label" for="lname" > Last Name: <input className="contact-input" type="text" placeholder="Last Name" required /> </label><br />
            <label className="contact-label" for="email-id">Email Id: <input className="contact-input" type="email" aria-describedby="emailHelp" placeholder="Email Address" required /></label><br />
            <label className="contact-label" for="message">Message: <br /><textarea className="contact-text" class="c-control" rows="5" cols="68" placeholder="Your Message" required></textarea> </label><br />
            <button className="contact-button" type="submit">Submit</button>
            <button className="contact-button" type="reset">Reset</button>
            <div>
              <br />
            </div>
          </form>
        </section>
        <br/>

      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit(event) {
  }
}