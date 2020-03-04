import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Support from "./views/Support";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/support">
            <Support />
          </Route>
          <Route exact path="/">
            <Redirect to="/support" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
