import logo from './logo.svg';
import './App.css';

import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import Navigation from './Shared/Navigation/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path='/'>
            <Home></Home>

          </Route>
          <Route  path='/home'>
            <Home></Home>

          </Route>
          <Route  path='/review'>
            <Review></Review>

          </Route>
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
