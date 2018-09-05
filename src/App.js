import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Zap from "./components/Zap";

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/zap" component={Zap} />
      <Route exact path="/zap/:id" component={Zap} />
    </Switch>
  </main>
);

export default App;
