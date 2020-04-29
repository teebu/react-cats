import React from 'react';
import './App.css';
import NotFoundImg from './images/404-cat.jpg'
import Nav from "./helpers/nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Facts from "./pages/Facts";
import Breeds from "./pages/Breeds";
import CatDetail from "./pages/CatDetail";
import Cats from "./pages/Cats";
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom'

function App() {
  return (
    <Router basename='/'> {/*Added basename to handle gh-pages subfolder pathing*/}
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/cats" exact><Cats size={15}/></Route>
          <Route path="/breeds" component={Breeds}/>
          <Route path="/facts" component={Facts}/>
          <Route path="/cat/:id" exact component={CatDetail}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

const NotFound = () => (
  <div>
    <Link to='/'>
      <img src={NotFoundImg} alt="404 car" style={{display: 'block', margin: '40px auto', width: '40%'}}/>
      You're lost. Go home!
    </Link>
  </div>
)

export default App;
