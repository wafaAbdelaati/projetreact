import './App.css';
import React, { Component } from "react";
import {
NavLink,
HashRouter,
Route
} from "react-router-dom";
import Home from "./Home"
import Stuff from './Stuff';
import Contact from './Contact';
import Registration from './Registration';
import Galerie from './Galerie';
class App extends Component {
  render() {
  return (
    <HashRouter>
      <div>
      <h1>Simple SPA</h1>
      <ul className="header">
      <li><NavLink exact to={'/'}>Home</NavLink></li>
      <li><NavLink to={'./Stuff'}>Stuff</NavLink></li>
      <li><NavLink to="./Contact">Contact</NavLink></li>
      <li><NavLink to="./Registration">Registration</NavLink></li>
      <li><NavLink to="./Galerie">Galerie</NavLink></li>


      </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Stuff" component={Stuff}/>
            <Route path="/Contact" component={Contact} />
           <Route path="/Registration" component={Registration} />
           <Route path="/Galerie" component={Galerie}/>

          </div>
      </div>
      </HashRouter>
  );
  }
}

export default App;
