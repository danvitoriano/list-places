import React from "react";
import createRouterContext from "react-router-test-context";
import ZapList from "../ZapList";
import { Switch, Route } from "react-router-dom";
import { shallow } from "enzyme";

it("renders /zap", () => {
  const context = createRouterContext({ location: { pathname: "/zap" } });
  const wrapper = shallow(
    <Switch>
      <Route path="/zap" component={ZapList} />
    </Switch>,
    { context }
  );
  const props = wrapper.props();
  expect(props.path).toBe("/zap");
});
