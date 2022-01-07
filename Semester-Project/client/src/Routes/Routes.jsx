import React, { } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "../Layout/Home/Home";
import NavBar from "../Layout/NavBar/NavBar";
import Add from "../Layout/Add/Add";
import Edit from "../Layout/Edit/Edit";
import About from "../Layout/About/About";

const Routes = () => {
  return (
    <div>
        <NavBar />
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/add" component={ Add } exact />
          <Route path="/edit" component={ Edit } exact />
          <Route path="/About" component={ About } exact />
        </Switch>
      </div>
  );
};

export default Routes;
