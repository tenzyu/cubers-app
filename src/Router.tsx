import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "pages/index";
import About from "pages/about";

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    );
  }
}
