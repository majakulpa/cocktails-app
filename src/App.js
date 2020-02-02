import React, { Fragment } from "react";
import Layout from "./containers/Layout/Layout";
import Main from "./containers/Main/Main";

function App() {
  return (
    <Fragment>
      <Layout>
        <Main />
      </Layout>
    </Fragment>
  );
}

export default App;
