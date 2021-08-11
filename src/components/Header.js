import React from 'react';
import {Link} from 'react-router-dom';
import {FaCartPlus, FaShoppingCart, FaSignOutAlt, FaUser} from 'react-icons/fa'

import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav, NavDropdown } from 'react-bootstrap';

class Header extends React.Component {

    render() {
        const { user, logOutUser } = this.props;
        return (
            <nav className="site-nav family-sans navbar navbar-expand bg-success navbar-dark higher">
                <div className="container-fluid">
                     
                <Link className="navbar-brand" to = "/"> <FaCartPlus className="mr-1" /> EcoShopper </Link>
                <div className="navbar-nav ml-auto">
                <Nav>
                        <NavDropdown title="Country">
                            <NavDropdown.Item href="country/Canada">Canada</NavDropdown.Item>
                            <NavDropdown.Item href="country/America">America</NavDropdown.Item>
                            <NavDropdown.Item href="country/Africa">Africa</NavDropdown.Item>
                            <NavDropdown.Item href="country/Australia">Australia</NavDropdown.Item>
                            <NavDropdown.Item href="country/Brazil">Brazil</NavDropdown.Item>
                            <NavDropdown.Item href="country/Carribean">Carribean</NavDropdown.Item>
                            <NavDropdown.Item href="country/China">China</NavDropdown.Item>
                            <NavDropdown.Item href="country/Europe">Europe</NavDropdown.Item>
                            <NavDropdown.Item href="country/France">France</NavDropdown.Item>
                            <NavDropdown.Item href="country/Germany">Germany</NavDropdown.Item>
                            <NavDropdown.Item href="country/HongKong">HongKong</NavDropdown.Item>
                            <NavDropdown.Item href="country/India">India</NavDropdown.Item>
                            <NavDropdown.Item href="country/Italy">Italy</NavDropdown.Item>
                            <NavDropdown.Item href="country/Iran">Iran</NavDropdown.Item>
                            <NavDropdown.Item href="country/Iraq">Iraq</NavDropdown.Item>
                            <NavDropdown.Item href="country/Japan">Japan</NavDropdown.Item>
                            <NavDropdown.Item href="country/Luxembourg">Luxembourg</NavDropdown.Item>
                            <NavDropdown.Item href="country/Malaysia">Malaysia</NavDropdown.Item>
                            <NavDropdown.Item href="country/Mexico">Mexico</NavDropdown.Item>
                            <NavDropdown.Item href="country/Norway">Norway</NavDropdown.Item>
                            <NavDropdown.Item href="country/Pakistan">Pakistan</NavDropdown.Item>   
                            <NavDropdown.Item href="country/Syria">Syria</NavDropdown.Item>
                            <NavDropdown.Item href="country/Quatar">Quatar</NavDropdown.Item>
                            <NavDropdown.Item href="country/Turkey">Turkey</NavDropdown.Item>
                            <NavDropdown.Item href="country/UK">UK</NavDropdown.Item>
                        </NavDropdown> 
                    </Nav>
                    { !user && <Link className="nav-item nav-link" to = "Signin"> Log in </Link>}
                    { !user && <Link className="nav-item nav-link" to = "Signup"> Sign up </Link> }
                    { user && <Link className="nav-item nav-link" to = "Cart"> Cart </Link> }
                    <Link className="nav-item nav-link" to = "Contact"> Contact </Link> 
                    <Link className="nav-item nav-link" to = "About"> About </Link> 
                    <Link className="nav-item nav-link" to = "TAC"> TAC </Link> 
                    <Link className="nav-item nav-link" to = "FAQ"> FAQ </Link>
                    <Link className="nav-item nav-link" to = "Cart"> <FaShoppingCart className="mr-1" />︁︁ </Link>
                    { user && <Link className="nav-item nav-link" to="/Signin" onClick={e => logOutUser(e)}> Log out <FaSignOutAlt />  </Link> }
                </div>
                </div>
            </nav>
        )
    }
}

export default Header;