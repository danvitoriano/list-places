import React from "react";
import createRouterContext from "react-router-test-context";
import ZapItemDetail from "../ZapItemDetail";
import { Switch, Route } from "react-router-dom";
import { shallow } from "enzyme";

it("renders /zap/7baf2775d4a2", () => {
  const context = createRouterContext({
    location: { pathname: "/zap/7baf2775d4a2" }
  });
  const wrapper = shallow(
    <Switch>
      <Route path="/zap/7baf2775d4a2" component={ZapItemDetail} />
    </Switch>,
    { context }
  );
  const props = wrapper.props();
  expect(props.path).toBe("/zap/7baf2775d4a2");
});
