import React from "react";
import ReactDOM from "react-dom";
import Home from "../Home";
import { mount } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("should display div", () => {
  const wrapper = mount(<Home />);
  expect(wrapper.find("div").length).toBe(10);
});

test("should display a", () => {
  const wrapper = mount(<Home />);
  expect(wrapper.find("a").length).toBe(3);
});
