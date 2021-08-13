import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Navbar,Nav } from 'react-bootstrap';

import Home from './dynamic/Home';
import Cart from './dynamic/Cart';
import Signup from './static/Signup';
import Signin from './static/Signin';
import About from './static/About';
import Contact from './static/Contact';
import TAC from './static/TAC';
import FAQ from './static/FAQ';
import firebase from './components/Firebase';
import Header from './components/Header';
import Footer from './components/Footer';
import history from './components/history';
import Profile from './components/Profile';
import RegistrationsSuccess from './components/RegistrationsSuccess'
import NotFound from './components/NotFound'
import Orders from './static/Orders';
import Delivery from './static/Delivery';
import ReturnsRefunds from './static/ReturnsRefunds';
import Account from './static/Account';
import GoogleMap from './static/GoogleMap'

function App(props) {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userID, setUserID] = useState(null);
  const [userDetails, setUserDetails] = useState({});

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : theme === 'dark' ? setTheme('green') : setTheme('light');
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(FBUser => {
      if (FBUser) {
        setUser(FBUser);
        setUserName(FBUser.displayName);
        setUserID(FBUser.uid);

        const profileRef = firebase.database().ref('userinformation/' + FBUser.displayName)
        profileRef.on('value', snapshot => {
          const snapshotData = snapshot.val();
          for (let item in snapshotData) {
            setUserDetails(snapshotData[item]);
            break;
          }
        });
      } else {
        setUser(null);
      }
    });
  }, [user, userID]);

  const registerUser = (userName, dname) => {
    setDisplayName(dname);
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName: userName,
      }).then(() => {
        setUser(FBUser);
        setUserName(FBUser.displayName);
        setUserID(FBUser.uid);
      })
    });
  }

  const logOutUser = e => {
    e.preventDefault();
    setUser(null);
    setUserID(null);
    firebase.auth().signOut().then(() => {
      history.push("/Signin");
      window.location.reload();
    })

  }

  const getWelcomeMessage = () => {
    return (
      <div className="text-center mt-4">
        <h4 className="card-title font-weight-light m-0">  Welcome {userName}! </h4>
      </div>
    );
  }

  return (
    <div>
      <Router history={history}>
        <Header user={user} logOutUser={logOutUser} />
        {user && getWelcomeMessage()}
        <Switch>
          <Route exact path="/" component={() => <Home user={user} />} />
          <Route exact path="/RegistrationsSuccess" component={() => <RegistrationsSuccess name={displayName} />} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/Signup" component={() => <Signup registerUser={registerUser} />} />
          <Route exact path="/Signin" component={() => <Signin />} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Profile" component={() => <Profile name={userDetails} />} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/TAC" component={TAC} />
          <Route exact path="/FAQ" component={FAQ} />
          <Route component={NotFound} />
          <Route exact path="/Orders" component={Orders} />
          <Route exact path="/Delivery" component={Delivery} />
          <Route exact path="/ReturnsRefunds" component={ReturnsRefunds} />
          <Route exact path="/Account" component={Account} />
        </Switch>
      </Router>
    <Footer />
      
    </div >
  );
}

export default App;