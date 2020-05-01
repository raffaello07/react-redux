import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import NotFoundPage from "./NotFoundPage";

// <> or <React.Fragment> is used to wrap elements-components without create a div or other tag in the DOM.
const App = () => (
  <>
    <Header />
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </>
);

export default App;
