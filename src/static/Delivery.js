import Footer from '../components/Footer';
import Header from '../components/Header';
import React from 'react';

export default class Delivery extends React.Component{
      
    render() {
        return (
        <div>
            <Header/>
            <div class="title">
            <h1> FAQs - Delivery </h1>
        </div>
        <section>
            <div class="container">
                <div class="accordian">
                    <div class="accordian-item" id="question1">
                        <a class="accordian-link" href="#question1">
                            What are the delivery charges?
                            <i class="icon ion-md-add"></i>
                            <i class="icon ion-md-remove"></i>
                        </a>
                        <div class="answer">
                            <p>
                                Delivery charges are dependent on the shipment requirements. You can see the shipping fees on the checkout process before the payment is made.
                            </p>
                        </div>
                    </div>

                    <div class="accordian-item" id="question2">
                        <a class="accordian-link" href="#question2">
                            Can I track my order?
                            <i class="icon ion-md-add"></i>
                            <i class="icon ion-md-remove"></i>
                        </a>
                        <div class="answer">
                            <p>
                                You can use all the major credit cards.
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
                            My order has not arrived. What should I do?
                            <i class="icon ion-md-add"></i>
                            <i class="icon ion-md-remove"></i>
                        </a>
                        <div class="answer">
                            <p>
                                Please contact us at ecoshopper@gmail.com soon as possible and we will find out where your order is.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
            <Footer/>
        </div>
        );
    }
}