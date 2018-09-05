import React from "react";

import { storiesOf } from "@storybook/react";

import ZapItem from "../components/ZapItem";
import Pagination from "../components/Pagination";

var data = {
  id: 7878999988
};

var exampleItems = [...Array(150).keys()].map(i => ({ id: i + 1 }));

storiesOf("Pagination", module).add(
  "with 20 itens per page and 10 pages max",
  () => <Pagination items={exampleItems} onChangePage={() => null} />
);
storiesOf("ZapItem", module).add("with infos", () => <ZapItem data={data} />);
