import React from 'react';
import './App.css';
import Nav from "./helpers/nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Facts from "./pages/Facts";
import Breeds from "./pages/Breeds";
import CatDetail from "./pages/CatDetail";
import Cat from "./helpers/Cat";
import Cats from "./pages/Cats";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'


function App() {
  return (
    <Router basename='/react-cats/'> {/*Added basename to handle gh-pages subfolder pathing*/}
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/cats" exact><Cats size={15}/></Route>
          <Route path="/breeds" component={Breeds} />
          <Route path="/facts" component={Facts} />
          <Route path="/cat/:id" exact component={CatDetail} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
