import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div class = "row">
                        <div class = "col-md-4">
                            <h5>Get to Know Us</h5>
                            <ul class = "footer-links">
                                <li>About us</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                        <div class = "col-md-3">
                            <h5>Quick Links</h5>
                            <ul class = "footer-links">
                                <li>Login</li>
                                <li>Register</li>
                                <li>Cart</li>
                            </ul>
                        </div>
                        <div class = "col-md-5">
                            <h5>More Resources</h5>
                            <ul class = "footer-links">
                                <li>Terms and Conditions</li>
                                <li>Frequently Asked Questions (FAQs)</li>
                                <li>Orders</li>
                                <li>Delivery</li>
                                <li>Returns and Refunds</li>
                                <li>Account</li>
                            </ul>
                        </div>
                    </div>
                </footer>
                    <div className="footer">
                        <p><em>EcoShopper: Ethically Sourced Products &copy; 2021</em></p>
                    </div>
            </div>
        )
    }
}

export default Footer;