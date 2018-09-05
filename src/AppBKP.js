import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Zap from "./components/Zap";
import Vivareal from "./components/Vivareal";

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/zap" component={Properties} />
      <Route exact path="/zap/:id" component={Properties} />
    </Switch>
  </main>
);

export default App;
