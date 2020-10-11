import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./../Welcome/Welcome";
import Random from "./../../containers/Random/Random";
import Cocktails from "./../../containers/Cocktails/Cocktails";
import classes from "./Main.css";

const main = () => (
  <main className={classes.Main}>
    <Switch>
      <Route exact path="/">
        <Redirect to="/cocktails-app/" component={Welcome} />
      </Route>
      <Route path="/cocktails-app/" exact component={Welcome} />
      <Route path="/cocktails-app/random" component={Random} />
      <Route path="/cocktails-app/recipes" component={Cocktails} />
    </Switch>
  </main>
);

export default main;
