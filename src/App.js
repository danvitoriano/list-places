import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Properties from "./components/Properties";
import Property from "./components/Property";
import Vivareal from "./components/Vivareal";

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={Properties} />
      {/* <Route exact path="/:vendor/:id" component={Property} /> */}
    </Switch>
  </main>
);

export default App;
