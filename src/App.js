import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './dynamic/Home';
import Cart from './dynamic/Cart';
import Signup from './static/Signup';
import Signin from './static/Signin';
import About from './static/About';
import Contact from './static/Contact';
import TAC from './static/TAC';
import FAQ from './static/FAQ';

//TAC: Terms and Conditions page
//FAQ: Frequently Asked Questions page

function App() {
  return (
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Cart" component={Cart} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Signin" component={Signin} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/TAC" component={TAC} /> 
            <Route exact path="/FAQ" component={FAQ} /> 
          </Switch>
      </Router>
  );
}

export default App;
