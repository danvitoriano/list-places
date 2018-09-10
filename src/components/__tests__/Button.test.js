import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import { shallow } from "enzyme";

const data = {
  textLabel: "My Sample Text"
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button label={data.textLabel} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("should display div", () => {
  const wrapper = shallow(<Button label={data.textLabel} />);
  expect(wrapper.find("button").length).toBe(1);
});
