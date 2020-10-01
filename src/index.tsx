import React from "react";
import ReactDOM from "react-dom";

import Router from "hashRouter";
import * as serviceWorker from "serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
