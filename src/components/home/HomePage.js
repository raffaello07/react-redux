import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Administration page</h1>
    <p>A React and Redux App</p>
    <Link to="about" className="btn btn-primary btn-big">
      Learn more
    </Link>
  </div>
);

export default HomePage;
