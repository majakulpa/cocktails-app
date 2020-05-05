import React, { Fragment } from "react";
import NavigationItems from "./../NavigationItems/NavigationItems";
import Backdrop from "./../../UI/Backdrop";
import classes from "./SideDrawer.css";

const SideDrawer = ({ open, closed }) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Fragment>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(" ")} onClick={closed}>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
