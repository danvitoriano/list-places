import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router";
import { shallow } from "enzyme";
import createRouterContext from "react-router-test-context";
import App from "./App";
import Home from "./components/Home";

describe("Route App", () => {
  it("renders root", () => {
    const context = createRouterContext({ location: { pathname: "/" } });
    const wrapper = shallow(
      <Switch>
        <Route path="/" component={Home} />
      </Switch>,
      { context }
    );
    const props = wrapper.props();
    expect(props.path).toBe("/");
  });
});
