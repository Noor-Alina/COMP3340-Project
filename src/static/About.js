import React from 'react';




export default class About extends React.Component{
      
    render() {
        return (
        <div>            
            <div>
            <div class="about">
                <h1>About EcoShopper</h1>
            </div>
                
            <br/>

            <div style={{overflow: 'auto'}}>
            
      
                <div class="main">
                
                    <p style={{textAlign: 'left', fontSize: 'large', borderStyle: 'outset'}}>EcoShopper is an online retailer of products that inform, educate, and inspire. We specializes in selling ethically sourced products. We strive to keep our customers happy. 
                    We sincerely appreciate your support and hope that the products you purchase from EcoShopper Store bring you pleasure!</p>
                    <img src="/images/efp.jpg" alt="Eco friendly"/>
                </div>

                <div class="right">
                    <h2>Our Goal?</h2>
                    <p style={{textAlign: 'left'}}>At EcoShopper, customers are our number one priority, and our goal is to make sure that they only get ethically sourced products.</p>
                    <h2>Where?</h2>
                    <p style={{textAlign: 'left'}}>Our store is online based with the intention to expand in the future.</p>
                    <h2>Prices?</h2>
                    <p style={{textAlign: 'left'}}>We try to get our valued customres the best value for their money.</p>
                </div>
            </div> 

            <br/>
        </div>
        </div>
        );
}
}