import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ZapList from "./components/ZapList";
import ZapItem from "./components/ZapItem";

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/zap" component={ZapList} />
      <Route exact path="/zap/:id" component={ZapItem} />
    </Switch>
  </main>
);

export default App;
