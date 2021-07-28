import React from 'react'
import Contact from '../static/Contact'

class Footer extends React.Component {
    render() {
        return (
            <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Get to Know Us</h3>
                            <ul>
                                <li><a href="./About">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Register</a></li>
                                <li><a href="#">Cart</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-md-3 item">
                            <h3>More Resources</h3>
                            <ul>
                                <li><a href="#">Orders</a></li>
                                <li><a href="#">Delivery</a></li>
                                <li><a href="#">Returns and Refunds</a></li>
                                <li><a href="#">Account/Profile</a></li>
                            </ul>
                        </div>
                    </div>
                    <p><em>EcoShopper: Ethically Sourced Products &copy; 2021</em></p>
                </div>
                </footer>
            </div>
        )
    }
}

export default Footer;