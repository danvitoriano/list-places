import React from "react";
import ReactDOM from "react-dom";
import Header from "../Header";
import { shallow, mount } from "enzyme";

it("renders without crashing buy", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("should display div", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find("div").length).toBe(3);
});

test("should display a", () => {
  const wrapper = mount(<Header />);
  expect(wrapper.find("a").length).toBe(1);
});

test("should display only one a", () => {
  const wrapper = mount(<Header />);
  expect(wrapper.find("a").length).toBe(1);
});
