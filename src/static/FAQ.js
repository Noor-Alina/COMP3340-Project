import React from 'react';

export default class FAQ extends React.Component{
      
    render() {
        return (
        <div>
            <div class="title">
                <h1> FAQs - Orders </h1>
            </div>

    
            <div class="row">
                <div class="column block" onclick="location.href='Orders.html';" style="cursor: pointer;">
                    <h2>Orders</h2>
                    <p>Data..</p>
                </div>
                <div class="column block" onclick="location.href='Delivery.html';" style="cursor: pointer;">
                    <h2>Delivery</h2>
                    <p>Data..</p>
                </div>
                <div class="column block" onclick="location.href='ReturnsRefunds.html';" style="cursor: pointer;">
                    <h2>Returns and Refunds</h2>
                    <p>Data..</p>
                </div>
                <div class="column block" onclick="location.href='Account.html';" style="cursor: pointer;">
                    <h2>Account</h2>
                    <p>Data..</p>
            </div>
        </div>
        </div>
        );
    }
}