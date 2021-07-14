import Footer from '../components/Footer';
import Header from '../components/Header';
import React from 'react'

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '',email: '',message: ''}
      }

    render() {  
        return (
            <div>
                <Header />
                <br />
                <div>
                    <h1 class="contact-h1">Contact-Us Form</h1>
                </div>
                <section>
                <form class="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <label class="contact-label" for="fname" > First Name: <input class="contact-input" type="text" placeholder="First Name" required/>
                        </label><br></br>
                    
                        <label class="contact-label" for="lname" > Last Name: <input class="contact-input" type="text" placeholder="Last Name" required/>
                        </label><br></br>
                    
                    
                        <label class="contact-label" for="email-id">Email Id: <input class="contact-input" type="email" aria-describedby="emailHelp" placeholder="Email Address" required/>
                        </label><br></br>
                    
                    
                        <label class="contact-label" for="message">Message: <br></br> <textarea class="contact-text" class="c-control"  placeholder="Your Message" required></textarea>
                        </label><br></br>
                        
                    
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                    <div>
                    <br></br>
                    </div>
                </form>
                </section>
            </div>

        );
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    
      handleSubmit(event) {
      }
}