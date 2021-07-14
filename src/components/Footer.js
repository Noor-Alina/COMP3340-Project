import React from 'react'
import Contact from '../static/Contact'

class Footer extends React.Component {
    render() {
        return (
                <div className="footer">
                    <div>
                    <div class = "row">
                        <div class = "col-md-4 footer-sep">
                            <h5>Get to Know Us</h5>
                            <ul class = "footer-links">
                                <li>About us</li>
                                <li>Contact Us</li>
                                <li>Frequently Asked Questions (FAQs)</li>
                            </ul>
                        </div>
                        <div class = "col-md-4 footer-sep">
                            <h5>Quick Links</h5>
                            <ul class = "footer-links">
                                <li>Login</li>
                                <li>Register</li>
                                <li>Cart</li>
                                <li>Terms and Conditions</li>
                            </ul>
                        </div>
                        <div class = "col-md-4 footer-sep">
                            <h5>More Resources</h5>
                            <ul class = "footer-links">
                                <li>Orders</li>
                                <li>Delivery</li>
                                <li>Returns and Refunds</li>
                                <li>Account/Profile</li>
                            </ul>
                        </div>
                    </div>
                    <p><em>EcoShopper: Ethically Sourced Products &copy; 2021</em></p>
                </div>
            </div>
        )
    }
}

export default Footer;