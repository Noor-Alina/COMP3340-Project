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
                    <a href = "cart.html">Login </a>
                    <a href = "cart.html">Contact </a>
                    <a href = "cart.html">Cart </a>
                </div>
            </header>
            </div>
        )
    }
}

export default Header;