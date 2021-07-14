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
                    <div class="contact-us">
                        <label class="contact-label" for="name">Name:</label>
                        <input class="contact-input" type="text" class="c-control" />
                    </div>
                    <div class="contact-us">
                        <label class="contact-label" for="email-id">Email:</label>
                        <input class="contact-input" type="email" class="c-control" aria-describedby="emailHelp" />
                    </div>
                    <div class="contact-us">
                        <label class="contact-label" for="message">Message: </label>
                        <textarea class="contact-text" class="c-control" rows="5" height = "300px"></textarea>
                    </div>
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