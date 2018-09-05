import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import Properties from "./components/Properties";
import Repo from "./Repo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/zap">Zap</Link>
        </li>
        <li>
          <Link to="/viva">Viva</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/zap" component={Properties} />
      <Route path="/viva" component={Properties} />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
