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
import {HashRouter as Router, Route, Routes, Link} from 'react-router-dom'

function App() {
  return (
    <Router basename='/'> {/*Added basename to handle gh-pages subfolder pathing*/}
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cats" element={<Cats size={15}/>}/>
          <Route path="/breeds" element={<Breeds/>}/>
          <Route path="/facts" element={<Facts/>}/>
          <Route path="/cat/:id" element={<CatDetail/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
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
