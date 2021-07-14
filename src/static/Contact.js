import Footer from '../components/Footer';
import Header from '../components/Header';
import React from 'react';
import axios from 'axios';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fname: '', lname: '',email: '',message: ''}
      }
      handleSubmit(e) {
        e.preventDefault();
      
        axios({
          method: "POST",
          url:"http://localhost:3002/send",
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success') {
            alert("Message Sent.");
            this.resetForm()
          } else if(response.data.status === 'fail') {
            alert("Message failed to send.")
          }
        })
      }
      resetForm(){
        this.setState({fname: '',lname:'', email: '', message: ''})
      }

    render() {  
        return (
            <div>
                <Header />
                <br />
                <div>
                    <h1 className="contact-h1">Contact-Us Form</h1>
                </div>
                <section>
                <form className="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <label className="contact-label" for="fname" > First Name: <input className="contact-input" type="text" placeholder="First Name" required/>
                        </label><br></br>
                    
                        <label className="contact-label" for="lname" > Last Name: <input className="contact-input" type="text" placeholder="Last Name" required/>
                        </label><br></br>
                    
                    
                        <label className="contact-label" for="email-id">Email Id: <input className="contact-input" type="email" aria-describedby="emailHelp" placeholder="Email Address" required/>
                        </label><br></br>
                    
                    <div>
                    <label class="contact-label" for="email-id">Email Id: </label>
                    <input class="contact-input" type="email" aria-describedby="emailHelp" placeholder="Email Address" required/>
                    </div>
                    
                        <label className="contact-label" for="message">Message: <br></br> <textarea className="contact-text" class="c-control"  placeholder="Your Message" required></textarea>
                        </label><br></br>
                        
                    
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                    <div>
                    <br></br>
                    </div>
                </form>
                </section>
                <Footer/>
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