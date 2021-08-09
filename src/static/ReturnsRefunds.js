import Footer from '../components/Footer';
import Header from '../components/Header';
import React from 'react';

export default class ReturnsRefunds extends React.Component{
      
    render() {
        return (
        <div>
            <div class="title">
            <h1> FAQs - Returns and Refunds </h1>
        </div>

            <br/>
            <br/>

            <div class="container">
                <div class="accordian">
                    <div class="accordian-item" id="question1">
                        <a class="accordian-link" href="#question1">
                            Does EcoShopper take returns?
                            <i class="icon ion-md-add"></i>
                            <i class="icon ion-md-remove"></i>
                        </a>
                        <div class="answer">
                            <p>
                                Yes, Items can be returned via mail or at one of our locations within 30 days of purchase. 
                            </p>
                        </div>
                    </div>

                    <div class="accordian-item" id="question2">
                        <a class="accordian-link" href="#question2">
                            How will my refund be paid to me?
                            <i class="icon ion-md-add"></i>
                            <i class="icon ion-md-remove"></i>
                        </a>
                        <div class="answer">
                            <p>
                                Your refund will be paid back via your original payment method.
                            </p>
                        </div>
                    </div>

                    <div class="accordian-item" id="question3">
                        <a class="accordian-link" href="#question3">
                            Can I cancel my order?
                            <i class="icon ion-md-add"></i>
                            <i class="icon ion-md-remove"></i>
                        </a>
                        <div class="answer">
                            <p>
                                If you want to cancel your order, please do so as soon as possible. If we have already processed your order, you need to contact us and return the product. 
                                Please contact ecoshopper@gmail.com 
                            </p>                          
                        </div>
                    </div>

                    <div class="accordian-item" id="question4">
                        <a class="accordian-link" href="#question4">
                            I received the wrong items,how do I proceed?
                            <i class="icon ion-md-add"></i>
                            <i class="icon ion-md-remove"></i>
                        </a>
                        <div class="answer">
                            <p>
                                Please contact us at ecoshopper@gmail.com soon as possible and we will help you through the process.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}