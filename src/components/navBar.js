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
        <nav >
          <ul className="flex flex-wrap p-3 mx-auto align-center justify-center">
          <Link to="/"><li className=" m-3 bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded" >
              Home
            </li></Link>
            <Link to="/selonline">   <li className=" m-3 bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded" >
             SELONLINE
            </li></Link>
            <Link to="/wilco">  <li className=" m-3 bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded" >
              WILCO
            </li></Link>
            <Link to="/robit"> <li className=" m-3 bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded" >
             ROB IT
            </li></Link>
            <Link to="/buckley"> <li className=" m-3 bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded" >
             BUCKLEY
            </li></Link>
            <Link to="/dgh"> <li className=" m-3 bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded" >
              DGH
            </li></Link>

            <Link to="/techy"><li className=" m-3 bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded" >
              TECHY
            </li></Link>
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
