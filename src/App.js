import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import Detail from "./components/Detail";
import { css } from "glamor";

// css fontface
const family = css.fontFace({
  fontFamily: "Open Sans",
  src: "url('https://fonts.googleapis.com/css?family=Open+Sans')"
});

// css global styles
css.global("html, body", { fontFamily: family, margin: 0 });

// main app router
const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/zap" component={() => <List player="zap" />} />
      <Route
        exact
        path="/vivareal"
        component={() => <List player="vivareal" />}
      />
      <Route exact path="/zap/:id" component={Detail} />
      <Route exact path="/vivareal/:id" component={Detail} />
    </Switch>
  </main>
);

export default App;
