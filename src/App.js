import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Support from "./views/Support";
import Login from "./views/Login";
import Services from "./views/Services";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import "../src/App.css";
=======
import Footer from "./components/Footer";

>>>>>>> 45728fc98fd475be84bac1544ba864150875182f
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
