import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./../Welcome/Welcome";
import Random from "./../../containers/Random/Random";
import Recipes from "./../../containers/Recipes/Recipes";
import About from "./../About/About";
import classes from "./Main.css";

const main = () => (
  <main className={classes.Main}>
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/random" component={Random} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/about" component={About} />
    </Switch>
  </main>
);

export default main;
