import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import Support from "./views/Support";
import Login from "./views/Login";
import Services from "./views/Services";
import Navbar from "./components/Navbar";
import "../src/App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
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
