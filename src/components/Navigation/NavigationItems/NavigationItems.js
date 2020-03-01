import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.css";

const navigationItems = () => (
  <Fragment>
    <ul className={classes.List}>
      <NavigationItem>
        <NavLink
          to="/random"
          activeStyle={{ borderBottom: "3px solid #c6e2ff" }}
        >
          Our Pick
        </NavLink>
      </NavigationItem>
      <NavigationItem>
        <NavLink
          to="/recipes"
          activeStyle={{ borderBottom: "3px solid #c6e2ff" }}
        >
          Recipes
        </NavLink>
      </NavigationItem>
      <NavigationItem>
        <NavLink
          to="/about"
          activeStyle={{ borderBottom: "3px solid #c6e2ff" }}
        >
          About
        </NavLink>
      </NavigationItem>
    </ul>
  </Fragment>
);

export default navigationItems;
