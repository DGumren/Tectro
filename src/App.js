import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import Support from "./views/Support";
import Login from "./views/Login";
import Services from "./views/Services";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <React path="/services">
            <Services />
          </React>
          <Route path="/support">
            <Support />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
