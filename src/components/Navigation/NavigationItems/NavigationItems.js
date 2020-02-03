import React, { Fragment } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.css";
import About from "./../../../components/About/About";
import Recipes from "./../../../containers/Recipes/Recipes";
import Main from "./../../../containers/Main/Main";

const navigationItems = () => (
  <Fragment>
    <ul className={classes.List}>
      <NavigationItem>
        <NavLink to="/">Home</NavLink>
      </NavigationItem>
      <NavigationItem>
        <NavLink to="/recipes">Recipes</NavLink>
      </NavigationItem>
      <NavigationItem>
        <NavLink to="/about">About</NavLink>
      </NavigationItem>
    </ul>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/about" component={About} />
    </Switch>
  </Fragment>
);

export default navigationItems;
