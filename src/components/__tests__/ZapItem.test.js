import React from "react";
import ReactDOM from "react-dom";
import ZapItem from "../ZapItem";

const data = {
  id: 787654456
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ZapItem key="1" data={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
