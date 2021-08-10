import React from 'react';
import {Link} from 'react-router-dom';
import {FaCartPlus, FaSignOutAlt, FaUser} from 'react-icons/fa'

import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav, NavDropdown } from 'react-bootstrap';

class Header extends React.Component {

    render() {
        const { user, logOutUser } = this.props;
        return (
            <nav className="site-nav family-sans navbar navbar-expand bg-success navbar-dark higher">
                <div className="container-fluid">
                    <Link className="navbar-brand" to = "/"> <FaCartPlus className="mr-1" /> EcoShopper</Link>
                     
                <Link className="navbar-brand" to = "/"> <FaCartPlus className="mr-1" /> EcoShopper </Link>
                <div className="navbar-nav ml-auto">
                <Nav>
                        <NavDropdown title="Country">
                            <NavDropdown.Item href="country/Canada">Canada</NavDropdown.Item>
                            <NavDropdown.Item href="country/India">India</NavDropdown.Item>
                            <NavDropdown.Item href="country/Germany">Germany</NavDropdown.Item>
                            <NavDropdown.Item href="country/Autralia">Australia</NavDropdown.Item>
                            <NavDropdown.Item href="country/Pakistan">Pakistan</NavDropdown.Item>
                            <NavDropdown.Item href="country/Iran">Iran</NavDropdown.Item>
                            <NavDropdown.Item href="country/Syria">Syria</NavDropdown.Item>
                            <NavDropdown.Item href="country/Iraq">Iraq</NavDropdown.Item>
                            <NavDropdown.Item href="country/Japan">Japan</NavDropdown.Item>

                        </NavDropdown>
                    
                    </Nav>
                    { !user && <Link className="nav-item nav-link" to = "Signin"> Log in </Link>}
                    { !user && <Link className="nav-item nav-link" to = "Signup"> Sign up </Link> }
                    { user && <Link className="nav-item nav-link" to = "Cart"> Cart </Link> }
                    <Link className="nav-item nav-link" to = "Contact"> Contact </Link> 
                    <Link className="nav-item nav-link" to = "About"> About </Link> 
                    <Link className="nav-item nav-link" to = "TAC"> TAC </Link> 
                    <Link className="nav-item nav-link" to = "FAQ"> FAQ </Link>
                    { user && <Link className="nav-item nav-link" to = "Profile"> Profile <FaUser/> </Link> } 
                    { user && <Link className="nav-item nav-link" to="Signin" onClick={e => logOutUser(e)}> Log out <FaSignOutAlt />  </Link> }
                    <Link className="nav-item nav-link" to = "Cart"> 🛒︁ </Link>
                    { user && <Link className="nav-item nav-link" to="/Signin" onClick={e => logOutUser(e)}> Log out <FaSignOutAlt />  </Link> }
                    
                </div>
                </div>
            </nav>
        )
    }
}

export default Header;