import React from "react";
import lingo3 from "../src/Components/style/Images/lingo3.png";

import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Templates from "../src/Components/Templates";
import Signup from "../src/Components/Signup";
import Login from "../src/Components/Login";
import Home from "../src/Components/Home";

function Navbar() {
  return (
    <Router>
      <div>
        <div className="navbar">
          <ul id="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/templates">View Templates</Link>
            </li>
            <img src={lingo3} className="logoImg" alt="Logo" />
            <li>
              <Login />
            </li>
            <li>
              <Signup />
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/templates">
              <Templates />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Navbar;
