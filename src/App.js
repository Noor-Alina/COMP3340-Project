import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Home from './dynamic/Home';
//import Cart from './dynamic/Cart/Cart';
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
import Orders from './static/Orders';
import Delivery from './static/Delivery';
import ReturnsRefunds from './static/Returns&Refunds';
import Account from './static/Account';


//TAC: Terms and Conditions page
//FAQ: Frequently Asked Questions page


//cart
import Main from './dynamic/Cart/Main';
import Basket from './dynamic/Cart/Basket';
import data from './dynamic/data';


function App(props) {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userID, setUserID] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  

  useEffect(() => {
    firebase.auth().onAuthStateChanged( FBUser => {
      if (FBUser) {
        setUser(FBUser);
        setUserName(FBUser.displayName);
        setUserID(FBUser.uid);

        const profileRef = firebase.database().ref('userinformation/' + FBUser.displayName)
        profileRef.on('value', snapshot => {
          const snapshotData = snapshot.val();
          for (let item in snapshotData){
            setUserDetails(snapshotData[item]);
            break;
          }
          
        });
      } else {
        setUser(null);
      }
    });
  }, [user, userID]);

  const registerUser = userName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName : userName,
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
    })
  }

  const getWelcomeMessage = () => {
    return (
        <div className="text-center mt-4">
          <h4 className="card-title font-weight-light m-0">  Welcome { userName }! </h4>
        </div>
    );
  }

 //cart
  const {products} = data;
  const [cartItems,setCartItems] = useState([]);
  //add items to cart
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist){
      setCartItems(
        cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1} : x
        )
      );
    } else {
      setCartItems([...cartItems, {...product, qty: 1 }]);
    }
  };

  //remove items from cart
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id) );
    } else {
      setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x
        )
        );
    }
  };
  return (
    <div>
        <Router history={history}>
        <Header user={user} logOutUser={logOutUser} countCartItems={cartItems.length}/>
        {user &&  getWelcomeMessage() }
          <Switch>
            <Route  exact path="/" component={() => <Home user={userName} />} />
            <Route  exact path="/Basket" component={Basket}/>
            <Route exact path="/Signup" component={() => <Signup registerUser={registerUser} />} />
            <Route exact  path="/Signin" component={Signin} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/TAC" component={TAC} /> 
            <Route exact path="/FAQ" component={FAQ} /> 
            <Route exact path="/Orders" component={Orders} /> 
            <Route exact path="/Delivery" component={Delivery} /> 
            <Route exact path="/ReturnsRefunds" component={ReturnsRefunds} /> 
            <Route exact path="/Account" component={Account} /> 


          </Switch>
        </Router>
        <>
        <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
        </div>
        </>
      <Footer/>
      
    </div>
  );
}

export default App;