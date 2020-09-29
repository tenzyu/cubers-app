import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "pages/index";
import TutorialThree from "pages/3x3";
import TutorialTwo from "pages/2x2";
import About from "pages/about";

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/3x3" component={TutorialThree} />
          <Route path="/2x2" component={TutorialTwo} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    );
  }
}
