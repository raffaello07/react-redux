import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <div>
    <h2>About</h2>
    <p>This is a Ract app that uses Redux and functions components.</p>
    <Link to="/" className="btn btn-secundary">
      Back
    </Link>
  </div>
);

export default AboutPage;
