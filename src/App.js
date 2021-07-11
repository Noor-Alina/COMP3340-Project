import './App.css';
import Home from './dynamic/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
      </Router>
  );
}

export default App;
