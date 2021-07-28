import React from 'react';
import {Link} from 'react-router-dom';

export default class FAQ extends React.Component{
      
    render() {
        return (

        <div>
            <div class="title">
                <h1> Frequently Asked Questions </h1>
            </div>

            <div class="row">
                <Link to ="Orders" style = {{textDecoration: 'none'}}>
                    <div class="column block">
                    <h2>Orders</h2>
                    <h6>Order placement, Tracking, Cancellation and Payment</h6>
                    </div>
                </Link>
                <Link to ="Delivery" style = {{textDecoration: 'none'}}>
                    <div className="column block">
                    <h2>Delivery</h2>
                    <h6>Charges, Shipping and Delivery dates               </h6>
                    </div>
                </Link>
                <Link to ="ReturnsRefunds" style = {{textDecoration: 'none'}}>
                    <div className="column block">
                    <h2>Returns and Refunds</h2>
                    <h6>Policy, payment etc</h6>
                    </div>
                </Link>
                <Link to ="Account" style = {{textDecoration: 'none'}}>
                    <div className="column block">
                    <h2>Account</h2>
                    <h6>Create, Edit account, login, account info</h6>
                    </div>
                </Link>
            </div>
        </div>
        );
    }
}