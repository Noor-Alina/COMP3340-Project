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
                    <h1>Contact-Us Form</h1>
                </div>
                <section>
                <form id="c-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div class="contact-us">
                        <label for="name">Name:</label>
                        <input type="text" class="c-control" />
                    </div>
                    <div class="contact-us">
                        <label for="email-id">Email:</label>
                        <input type="email" class="c-control" aria-describedby="emailHelp" />
                    </div>
                    <div class="contact-us">
                        <label for="message">Message: </label>
                        <textarea class="c-control" rows="5" height = "300px"></textarea>
                    </div>
                </form>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
                </section>

                <Footer />
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