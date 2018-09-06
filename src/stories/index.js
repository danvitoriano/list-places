import React from "react";

import { storiesOf } from "@storybook/react";

import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Text from "../components/Text";

const data = {
  textLabel: "My Sample Text",
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

var exampleItems = [...Array(150).keys()].map(i => ({ id: i + 1 }));

storiesOf("Pagination", module).add(
  "with 20 itens per page and 10 pages max",
  () => <Pagination items={exampleItems} onChangePage={() => null} />
);
storiesOf("Card", module).add("with infos", () => <Card data={data} />);
storiesOf("Text", module).add("default", () => <Text label={data.textLabel} />);
storiesOf("Text", module).add("h1", () => (
  <Text type="h1" label={data.textLabel} />
));
storiesOf("Text", module).add("price", () => (
  <Text type="price" label={data.pricingInfos.price} />
));
