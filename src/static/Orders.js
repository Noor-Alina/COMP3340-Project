import Footer from '../components/Footer';
import Header from '../components/Header';
import React from 'react';

export default class Orders extends React.Component{
      
    render() {
        return (
        <div>
            <Header/>
        <div class="title">
            <h1> FAQs - Orders </h1>
        </div>
        <section>
            <div class="container">
                <div class="accordian">
                    <div class="accordian-item" id="question1">
                        <a class="accordian-link" href="#question1">
                            How can I place an order?
                            <i class="icon ion-md-add"></i>
                            <i class="icon ion-md-remove"></i>
                        </a>
                        <div class="answer">
                            <p>
                                You can order easily using our online platform. When you find a product you need, you can add it to cart, login and go through the ordering process. 
                                After the order is ready, you will receive an order summary to your email. Order summary will also be stored in your account.
                            </p>
                        </div>
                    </div>

                    <div class="accordian-item" id="question2">
                        <a class="accordian-link" href="#question2">
                            What payment method can I use?
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
                            Can I track my order?
                            <i class="icon ion-md-add"></i>
                            <i class="icon ion-md-remove"></i>
                        </a>
                        <div class="answer">
                            <p>
                                We will send you the tracking code of the shipment when the parcel has been sent.
                            </p>                          
                        </div>
                    </div>

                    <div class="accordian-item" id="question4">
                        <a class="accordian-link" href="#question4">
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

                    <div class="accordian-item" id="question5">
                        <a class="accordian-link" href="#question5">
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