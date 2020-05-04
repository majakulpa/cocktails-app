import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./../Welcome/Welcome";
import Random from "./../../containers/Random/Random";
import Cocktails from "./../../containers/Cocktails/Cocktails";
import classes from "./Main.css";

const main = () => (
  <main className={classes.Main}>
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/random" component={Random} />
      <Route path="/recipes" component={Cocktails} />
    </Switch>
  </main>
);

export default main;
