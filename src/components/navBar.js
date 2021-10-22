import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import Techy from "./websites/techy";
import Wilco from "./websites/wilco";
import Selonline from "./websites/selonline";
import Robit from "./websites/robit";
import Dgh from "./websites/dgh";
import Buckley from "./websites/buckley";

const NavBar = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/selonline">SELONLINE</Link>
            </li>
            <li>
              <Link to="/wilco">WILCO</Link>
            </li>
            <li>
              <Link to="/robit">ROB IT</Link>
            </li>
            <li>
              <Link to="/buckley">BUCKLEY</Link>
            </li>
            <li>
              <Link to="/dgh">DGH</Link>
            </li>

            <li>
              <Link to="/techy">TECHY</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/selonline">
            <Selonline />
          </Route>
          <Route path="/wilco">
            <Wilco />
          </Route>
          <Route path="/robit">
            <Robit />
          </Route>
          <Route path="/buckley">
            <Buckley />
          </Route>
          <Route path="/dgh">
            <Dgh />
          </Route>
          <Route path="/techy">
            <Techy />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default NavBar;
