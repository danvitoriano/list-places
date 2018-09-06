import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";

const data = {
  textLabel: "My Sample Text"
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button label={data.textLabel} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
