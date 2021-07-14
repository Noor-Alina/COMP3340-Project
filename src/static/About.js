import Footer from '../components/Footer';
import Header from '../components/Header';
import React from 'react';

export default class About extends React.Component{
      
    render() {
        return (
        <div>
            <Header/>
            <br/>
            <div>
                <h1>About Us</h1>
  
            </div>

            <div style="overflow:auto">

      
                <div class="main">
                    <h2>About EcoShopper</h2>
                    <p>EcoShopper is an online stores that specializes in selling ethically sourced products.</p>
                    <img src="assets\images\sun.jpg" style="width:100%" />
                </div>

                <div class="right">
                    <h2>Our Goal?</h2>
                    <p>At EcoShopper, customers are our number one priority, and our goal is to make sure that they only get ethically sourced products.</p>
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