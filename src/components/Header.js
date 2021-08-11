import React from 'react';
import {Link} from 'react-router-dom';
import {FaCartPlus, FaSignOutAlt, FaUser} from 'react-icons/fa'

import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav, NavDropdown } from 'react-bootstrap';

class Header extends React.Component {

    render() {
        const { user, logOutUser } = this.props;
        const[country, setCountry] = useState('');

    const handleCountry = (event) => {
        event.preventDefault();

        setCountry(<Link>{`/${event.target.value}`}</Link>)
    }


        return (
            <nav className="site-nav family-sans navbar navbar-expand bg-success navbar-dark higher">
                <div className="container-fluid">
                    <Link className="navbar-brand" to = "/"> <FaCartPlus className="mr-1" /> EcoShopper</Link>
                     
                <Link className="navbar-brand" to = "/"> <FaCartPlus className="mr-1" /> EcoShopper </Link>
                <div className="navbar-nav ml-auto">
                <select name='country' value={country} onClick={(e) => handleCountry(e)}>
                    <option value='Canada' >Canada</option>
                           
                           <option  value='America'>America</option>
                           <option value='Africa' >Africa</option>
                           <option >Australia</option>
                           <option >Brazil</option>
                           <option >Carribean</option>
                           <option >China</option>
                           <option >Europe</option>
                           <option >France</option>
                           <option >Germany</option>
                           <option >HongKong</option>
                           <option >India</option>
                           <option >Italy</option>
                           <option >Iran</option>
                           <option >Iraq</option>
                           <option >Japan</option>
                           <option >Luxembourg</option>
                           <option >Malaysia</option>
                           <option >Mexico</option>
                           <option >Norway</option>
                           <option >Pakistan</option>   
                           <option >Syria</option>
                           <option >Quatar</option>
                           <option >Turkey</option>
                           <option >UK</option>
                    </select>

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