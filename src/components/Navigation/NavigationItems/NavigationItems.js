import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.css";

const navigationItems = () => (
  <Fragment>
    <ul className={classes.List}>
      <NavigationItem>
        <NavLink to="/random">Home</NavLink>
      </NavigationItem>
      <NavigationItem>
        <NavLink to="/recipes">Recipes</NavLink>
      </NavigationItem>
      <NavigationItem>
        <NavLink to="/about">About</NavLink>
      </NavigationItem>
    </ul>
  </Fragment>
);

export default navigationItems;
