import React from 'react'

class Footer extends React.Component {
    render() {
        return (
                <div className="footer">
                    <div>
                    <div className = "row">
                        <div className = "col-md-4 footer-sep">
                            <h5>Get to Know Us</h5>
                            <ul className = "footer-links">
                                <li>About us</li>
                                <li>Contact us</li>
                                <li>Frequently Asked Questions (FAQs)</li>
                            </ul>
                        </div>
                        <div className = "col-md-4 footer-sep">
                            <h5>Quick Links</h5>
                            <ul className = "footer-links">
                                <li>Login</li>
                                <li>Register</li>
                                <li>Cart</li>
                                <li>Terms and Conditions</li>
                            </ul>
                        </div>
                        <div className = "col-md-4 footer-sep">
                            <h5>More Resources</h5>
                            <ul className = "footer-links">
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