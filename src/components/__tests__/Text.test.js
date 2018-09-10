import React from "react";
import ReactDOM from "react-dom";
import Text from "../Text";
import { shallow } from "enzyme";

const data = {
  textLabel: "My Sample Text",
  usableArea: 56,
  pricingInfos: {
    price: 42000
  }
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Text label={data.textLabel} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Text type="h1" label={data.textLabel} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Text type="price" label={data.pricingInfos.price} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Text type="iconPrice" label={data.pricingInfos.price} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Text type="iconArea" label={data.pricingInfos.price} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

test("should display div iconArea", () => {
  const wrapper = shallow(
    <Text type="iconArea" label={data.usableArea} pricePerM2="10" />
  );
  expect(wrapper.find("div").length).toBe(1);
});

test("should display span iconArea", () => {
  const wrapper = shallow(
    <Text type="iconArea" label={data.usableArea} pricePerM2="10" />
  );
  expect(wrapper.find("span").length).toBe(2);
});
