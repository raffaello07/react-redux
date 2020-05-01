import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#fff", textDecoration: "none" };

  return (
    <nav className="site-header sticky-top py-1">
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <NavLink
          to="/"
          exact
          activeStyle={activeStyle}
          className="py-2 d-inline-block"
        >
          Home
        </NavLink>
        <NavLink
          to="/courses"
          activeStyle={activeStyle}
          className="py-2 d-inline-block"
        >
          Courses
        </NavLink>
        <NavLink
          to="/about"
          activeStyle={activeStyle}
          className="py-2 d-inline-block"
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
