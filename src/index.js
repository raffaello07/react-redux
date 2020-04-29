import React from "react";
import { render } from "react-dom";

const Hi = () => {
  return <h1>Hello world</h1>;
};

render(<Hi />, document.getElementById("app"));
