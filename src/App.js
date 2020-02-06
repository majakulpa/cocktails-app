import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Main from "./components/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Main />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
