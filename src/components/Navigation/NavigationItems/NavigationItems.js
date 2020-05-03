import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./../NavigationItems/NavigationItem/NavigationItem.css";

const navigationItems = () => (
  <Fragment>
    <ul className={classes.List}>
      <NavigationItem>
        <NavLink to="/random" activeClassName={classes.Active}>
          Random Cocktail
        </NavLink>
      </NavigationItem>
      <NavigationItem>
        <NavLink to="/cocktails" activeClassName={classes.Active}>
          Recipes
        </NavLink>
      </NavigationItem>
    </ul>
  </Fragment>
);

export default navigationItems;
