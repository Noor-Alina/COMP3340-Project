import React from 'react';
import {Link} from 'react-router-dom';

//<a href = "/Signin" onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</a>


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
                    <a href = "/About">About Us</a>
                    <a href = "/Cart">Cart</a>
                </div>
            </header>
            </div>
        )
    }
}

export default Header;