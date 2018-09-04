import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Zap from "./components/Home";
import Vivareal from "./components/Vivareal";

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/zap" component={Zap} />
      <Route path="/zap/:id" component={Zap} />
      <Route path="/vivareal" component={Vivareal} />
      <Route path="/vivareal/:id" component={Vivareal} />
    </Switch>
  </main>
);

export default App;
