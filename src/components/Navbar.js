import React from "react";

import TECTRO from "../assets/TECTRO.png";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <form class="form-inline">
          <img
            className="logo"
            src={TECTRO}
            alt="logo"
            style={{ height: "4rem" }}
          />
        </form>

        <div class="btn-group">
          <button
            type="button"
            class="btn btn-secondary  dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Links
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">
              Login
            </a>
            <a class="dropdown-item" href="#">
              Services
            </a>
            <a class="dropdown-item" href="#">
              Support
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              Home
            </a>
          </div>
        </div>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};
export default Navbar;
