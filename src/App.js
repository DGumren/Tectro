import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Support from "./views/Support";
import Login from "./views/Login";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/support">
            <Support />
          </Route>
          <Route path="/login">
            <Login />
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
