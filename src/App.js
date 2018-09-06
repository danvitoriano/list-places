import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ZapList from "./components/ZapList";
import ZapItemDetail from "./components/ZapItemDetail";
import { css } from "glamor";

// css fontface
const family = css.fontFace({
  fontFamily: "Open Sans",
  src: "url('https://fonts.googleapis.com/css?family=Open+Sans')"
});

// css global styles
css.global("html, body", { fontFamily: family });

// main app router
const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/zap" component={ZapList} />
      <Route exact path="/zap/:id" component={ZapItemDetail} />
    </Switch>
  </main>
);

export default App;
