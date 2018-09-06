import React from "react";
import ReactDOM from "react-dom";
import Card from "../Card";

const data = {
  id: 787654456,
  address: {
    geoLocation: {
      location: {
        lon: -46.787,
        lat: -46.897
      }
    }
  },
  pricingInfos: {
    price: 42000
  }
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card key="1" data={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
