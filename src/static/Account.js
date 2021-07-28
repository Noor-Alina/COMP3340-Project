import Footer from '../components/Footer';
import Header from '../components/Header';
import React from 'react';

export default class Account extends React.Component{
      
    render() {
        return (
        <div>
            <div class="title">
            <h1> FAQs - Account </h1>
        </div>

            <br/>
            <br/>

            <div class="container">
                <div class="accordian">
                    <div class="accordian-item" id="question1">
                        <a class="accordian-link" href="#question1">
                            How do I create an account?
                            <i class="icon ion-md-add"></i>
                            <i class="icon ion-md-remove"></i>
                        </a>
                        <div class="answer">
                            <p>
                                Go to this page www.ecoshopper.com/signup and then just fill in all the needed information and click “sign up”.  
                                After submitting the form, your account will be confirmed and you will be notified.  
                            </p>
                        </div>
                    </div>

                    <div class="accordian-item" id="question2">
                        <a class="accordian-link" href="#question2">
                            How can I retrieve my password?
                            <i class="icon ion-md-add"></i>
                            <i class="icon ion-md-remove"></i>
                        </a>
                        <div class="answer">
                            <p>
                                You can retrieve your password by clicking “forgot password?” at log in. 
                                The Instruction on password retrieval will be sent to your email.

                            </p>
                        </div>
                    </div>

                    <div class="accordian-item" id="question3">
                        <a class="accordian-link" href="#question3">
                            How do I change my personal details or email address?
                            <i class="icon ion-md-add"></i>
                            <i class="icon ion-md-remove"></i>
                        </a>
                        <div class="answer">
                            <p>
                                You can edit your information by  going to the login page www.ecoshopper.com/login and log in, then click “my account” and “edit”. 
                                Here you can change all your contact information.
                            </p>                          
                        </div>
                    </div>

                    <div class="accordian-item" id="question4">
                        <a class="accordian-link" href="#question4">
                            Can I add a second shipping address to my account?
                            <i class="icon ion-md-add"></i>
                            <i class="icon ion-md-remove"></i>
                        </a>
                        <div class="answer">
                            <p>
                                Yes, a second shipping address may be added by going into your account information and simply pressing the add address button.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

