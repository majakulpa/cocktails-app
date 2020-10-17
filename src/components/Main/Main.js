import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import classes from "./Main.css";
import Loader from "./../UI/Loader";
const Welcome = React.lazy(() => import("./../Welcome/Welcome"));
const Random = React.lazy(() => import("./../../containers/Random/Random"));
const Cocktails = React.lazy(() =>
  import("./../../containers/Cocktails/Cocktails")
);

const main = () => (
  <Suspense fallback={<Loader />}>
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
  </Suspense>
);

export default main;
