import React from "react";
import {
  // BrowserRouter,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import Index from "pages/index";
import TutorialThree from "pages/tutorialThree";
import TutorialTwo from "pages/tutorialTwo";
import About from "pages/about";
import Credits from "pages/credits";
import NotFound from "pages/notFound";

export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/3x3" component={TutorialThree} />
          <Route exact path="/2x2" component={TutorialTwo} />
          <Route exact path="/about" component={About} />
          <Route exact path="/credits" component={Credits} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}
