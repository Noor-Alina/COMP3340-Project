import React from 'react'
import axios from 'axios'

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
        <br />
        <div>
            <h1>Contact</h1>
        </div>
        <section>
          <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <label className="contact-label" for="fname" > First Name: <input className="contact-input" type="text" placeholder="First Name" required /> </label><br />
            <label className="contact-label" for="lname" > Last Name: <input className="contact-input" type="text" placeholder="Last Name" required /> </label><br />
            <label className="contact-label" for="email-id">Email Id: <input className="contact-input" type="email" aria-describedby="emailHelp" placeholder="Email Address" required /></label><br />
            <label className="contact-label" for="message">Message: <br /><textarea className="contact-text" class="c-control" rows="5" cols="80" placeholder="Your Message" required></textarea> </label><br />
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