import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./../components/nav/Nav";
import CartoonPage from "./CartoonPage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";

function PageRouter() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={CartoonPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/Projects' component={ProjectsPage} />
      </Switch>
    </Router>
  );
}

export default PageRouter;
