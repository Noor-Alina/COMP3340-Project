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
<<<<<<< HEAD
                    <a href = "/Signin">Login </a>
                    <a href = "/Cart">Cart </a>
                    <a href = "/Contact">Contact </a>
=======
                    <a href = "/Signin">Login</a>
                    <a href = "/Contact">Cart</a>
                    <a href = "/Contact">Contact</a>
>>>>>>> dea0a93a479df7480f47de87e56ed7ea1ed87018
                </div>
            </header>
            </div>
        )
    }
}

export default Header;