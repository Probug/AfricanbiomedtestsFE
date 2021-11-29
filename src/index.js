import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
// const app = (
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
// ReactDOM.render(app, document.getElementById("root"));

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'));
serviceWorker.register();