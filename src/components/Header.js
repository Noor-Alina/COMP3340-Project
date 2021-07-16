import React from 'react'
import {Link} from 'react-router-dom';
import {FaCartPlus, FaSignOutAlt, FaUser} from 'react-icons/fa'

import 'bootstrap/dist/css/bootstrap.css';

class Header extends React.Component {

    render() {
        const { user, logOutUser } = this.props;
        return (
            <nav className="site-nav family-sans navbar navbar-expand bg-success navbar-dark higher">
                <div className="container-fluid">
                <Link className="navbar-brand" to = "/"> <FaCartPlus className="mr-1" /> EcoShopper </Link>
                <div className="navbar-nav ml-auto">
                    { !user && <Link className="nav-item nav-link" to = "Signin"> Log in </Link>}
                    { !user && <Link className="nav-item nav-link" to = "Signup"> Sign up </Link> }
                    { user && <Link className="nav-item nav-link" to = "Cart"> Cart </Link> }
                    <Link className="nav-item nav-link" to = "Contact"> Contact </Link> 
                    <Link className="nav-item nav-link" to = "About"> About </Link> 
                    <Link className="nav-item nav-link" to = "TAC"> TAC </Link> 
                    <Link className="nav-item nav-link" to = "FAQ"> FAQ </Link>
                    { user && <Link className="nav-item nav-link" to = "Profile"> Profile <FaUser/> </Link> } 
                    { user && <Link className="nav-item nav-link" to="Signin" onClick={e => logOutUser(e)}> Log out <FaSignOutAlt />  </Link> }
                </div>
                </div>
            </nav>
        )
    }
}

export default Header;
