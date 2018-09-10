import React from "react";
import createRouterContext from "react-router-test-context";
import List from "../List";
import { Switch, Route } from "react-router-dom";
import { shallow } from "enzyme";

it("renders /zap", () => {
  const context = createRouterContext({ location: { pathname: "/zap" } });
  const wrapper = shallow(
    <Switch>
      <Route path="/zap" component={List} />
    </Switch>,
    { context }
  );
  const props = wrapper.props();
  expect(props.path).toBe("/zap");
});

it("renders /vivareal", () => {
  const context = createRouterContext({ location: { pathname: "/vivareal" } });
  const wrapper = shallow(
    <Switch>
      <Route path="/vivareal" component={List} />
    </Switch>,
    { context }
  );
  const props = wrapper.props();
  expect(props.path).toBe("/vivareal");
});
