import React from 'react';
import './App.css';
import Nav from "./helpers/nav";
import About from "./pages/About";
import Facts from "./pages/Facts";
import Breeds from "./pages/Breeds";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/breeds" component={Breeds}/>
          <Route path="/facts" component={Facts}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Cats</h1>
    <div className="intro">Click <Link to='/facts'>facts</Link> to see random facts about cats.</div>
  </div>
);

export default App;
