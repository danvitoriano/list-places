import React from "react";
import ReactDOM from "react-dom";
import Text from "../Text";

const data = {
  textLabel: "My Sample Text",
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
