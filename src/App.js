import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Support from "./views/Support";
import Login from "./views/Login";
import Services from "./views/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/services" component={Services} />
          <Route path="/login" component={Login} />
          <Route path="/support" component={Support} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
