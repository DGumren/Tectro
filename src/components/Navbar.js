import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/services">
          <a class="navbar-brand" href="#">
            Tectro
          </a>
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <Link to="/services#">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
            </Link>
            <Link to="/support#">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Support
                </a>
              </li>
            </Link>
            <li class="nav-item dropdown">
              <a
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></a>
              <div></div>
            </li>
            <Link to="/login#">
              <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">
                  Login
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
