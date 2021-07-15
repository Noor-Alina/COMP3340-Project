import Footer from '../components/Footer';
import Header from '../components/Header';
import React from 'react';

export default class About extends React.Component{
      
    render() {
        return (
        <div>
            <Header/>
            <br/>
            <div style="background-color:#f7f7f7;padding:15px;">
                <h1>About Us</h1>
  
            </div>

            <div style="overflow:auto">

                <div class="menu">
                    <ul>
                        <li><div class="menuitem"><a href="#">Home</a></div></li>
                        <li><div class="menuitem"><a href="#">Products</a></div></li>
                        <li><div class="menuitem"><a href="#">Contact Us</a></div></li>
                        <li><div class="menuitem"><a href="#">About Us</a></div></li>
                    </ul>
                </div>
      
                <div class="main">
                    <h2>About EcoShopper</h2>
                    <p>We sell eco-friendly products. 
                    EchoShopper is one of the best online stores that specializes in selling eco-friendly products.</p>
                    <img src="ef.jpg" style="width:100%" />
                </div>

                <div class="right">
                    <h2>Our Goal?</h2>
                    <p>At EcoShopper, customers are our number one priority, and our goal is to make sure the products they are getting are absolutely ethically sourced.</p>
                    <h2>Where?</h2>
                    <p>Our store is online based with the intention to expand in the future.</p>
                    <h2>Prices?</h2>
                    <p>We try to get our valued customres the best value for their money.</p>
                </div>
            </div> 

            <br/>
            <Footer/>
        </div>
        );
    }
}