import React from "react";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark sticky-top">
      <Link to="/" className="navbar-brand mx-4">
        Redux Practice
      </Link>
      <div className="d-flex flex-row-reverse">
          <NavLink className="btn btn-dark mx-2" to="/api" exact>
              api
          </NavLink>
          <NavLink className="btn btn-dark mx-2" to="/" exact>
              Info
          </NavLink>
      </div>
    </div>
  );
};

export default Navbar;