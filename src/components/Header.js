import React from 'react'
import {Link} from 'react-router-dom';


class Header extends React.Component {
    render() {
        return (
            <div>
                <header className = "header">    
                <div className = "brand">
                    <Link to = "/">EcoShopper</Link>
                </div>
                <div className = "header-links">
                    <a href = "/Signin">Login</a>
                    <a href = "/About">About us</a>
                    <a href = "/Contact">Contact</a>
                    <a href = "/Cart">Cart</a>
                </div>
            </header>
            </div>
        )
    }
}

export default Header;