import React, { Component, Fragment } from "react";
import Toolbar from "./../../components/Navigation/Toolbar/Toolbar";
import Main from "./../../components/Main/Main";

class Layout extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Toolbar />
        <Main />
      </Fragment>
    );
  }
}

export default Layout;
