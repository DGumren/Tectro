import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Support from "./views/Support";
import Login from "./views/Login";
import Home from "./views/Home";
import Navbar from "./components/Navbar";

import "../src/App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/services" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/support" component={Support} />
          <Route exact path="/"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
