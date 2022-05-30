
import './App.css';
import {Home} from './MyComponent/Home.jsx';
import {LoginPage} from './MyComponent/LoginPage.jsx';
import {SignUp} from './MyComponent/SignUp.jsx';
import Camps from './MyComponent/Camps';
import Navbar from './MyComponent/Navbar';
import Camp from './MyComponent/Camp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/LoginPage" component={LoginPage} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Camps" component={Camps} />
          <Route exact path="/Navbar" component={Navbar} />
          <Route exact path="/Camp" component={Camp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
