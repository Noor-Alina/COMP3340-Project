import React from 'react';
import {Link} from 'react-router-dom';
<<<<<<< HEAD

//<a href = "/Signin" onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</a>

=======
import {FaCartPlus, FaSignOutAlt} from 'react-icons/fa'
>>>>>>> 1c06305120c35489bc2d5671e868ae3d6a305883

class Header extends React.Component {
    render() {
        const { user, logOutUser } = this.props;
        return (
            <nav className="site-nav family-sans navbar navbar-expand bg-success navbar-dark higher">
                <div className="container-fluid">
                    <Link className="navbar-brand" to = "/"> <FaCartPlus className="mr-1" /> EcoShopper</Link>
                <div className="navbar-nav ml-auto">
                    { !user && <Link className="nav-item nav-link" to = "Signin"> Login </Link>}
                    { !user && <Link className="nav-item nav-link" to = "Signup"> Signup </Link> }
                    { user && <Link className="nav-item nav-link" to = "Cart"> Cart </Link> }
                    <Link className="nav-item nav-link" to = "Contact"> Contact </Link> 
                    <Link className="nav-item nav-link" to = "About"> About </Link> 
                    <Link className="nav-item nav-link" to = "TAC"> TAC </Link> 
                    <Link className="nav-item nav-link" to = "FAQ"> FAQ </Link> 
                    { user && <Link className="nav-item nav-link" to="/Signin" onClick={e => logOutUser(e)}> Log out <FaSignOutAlt />  </Link> }
                </div>
<<<<<<< HEAD
                <div className = "header-links">
                    <a href = "/Signin">Login</a>
                    <a href = "/About">About us</a>
                    <a href = "/Contact">Contact</a>
                    <a href = "/About">About Us</a>
                    <a href = "/Cart">Cart</a>
=======
>>>>>>> 1c06305120c35489bc2d5671e868ae3d6a305883
                </div>
            </nav>
        )
    }
}

export default Header;