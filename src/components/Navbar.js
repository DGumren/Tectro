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

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>

            <Link to="/services#">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Services
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
                class="nav-link dropdown-toggle"
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
