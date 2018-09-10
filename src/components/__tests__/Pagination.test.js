import React from "react";
import ReactDOM from "react-dom";
import Pagination from "../Pagination";
import { shallow } from "enzyme";

var onChangePage = () => null;
var exampleItems = [...Array(150).keys()].map(i => ({ id: i + 1 }));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Pagination />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("should display div", () => {
  const wrapper = shallow(
    <Pagination items={exampleItems} onChangePage={onChangePage} />
  );
  expect(wrapper.find("div").length).toBe(1);
});
test("should display ul", () => {
  const wrapper = shallow(
    <Pagination items={exampleItems} onChangePage={onChangePage} />
  );
  expect(wrapper.find("ul").length).toBe(1);
});
test("should display li", () => {
  const wrapper = shallow(
    <Pagination items={exampleItems} onChangePage={onChangePage} />
  );
  expect(wrapper.find("li").length).toBe(12);
});
test("should display a", () => {
  const wrapper = shallow(
    <Pagination items={exampleItems} onChangePage={onChangePage} />
  );
  expect(wrapper.find("a").length).toBe(12);
});
