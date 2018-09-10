import React from "react";
import ReactDOM from "react-dom";
import Link from "../Link";
import { shallow } from "enzyme";

it("renders without crashing buy", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Link label="oi" href="/" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("should display div", () => {
  const wrapper = shallow(<Link />);
  expect(wrapper.find("div").length).toBe(1);
});

test("should display a", () => {
  const wrapper = shallow(<Link />);
  expect(wrapper.find("a").length).toBe(1);
});
