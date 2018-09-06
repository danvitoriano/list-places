import React from "react";

import { storiesOf } from "@storybook/react";

import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Text from "../components/Text";
import Image from "../components/Image";
import Button from "../components/Button";

const data = {
  textLabel: "My Sample Text",
  id: 787654456,
  images: [
    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/285805119ab0761500127aebd8ab0e1d.jpg",
    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/4af1656b66b9e12efff6ce06f51926f6.jpg",
    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/895f0d4ce1e641fd5c3aad48eff83ac8.jpg",
    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/e7b5cce2d9aee78867328dfa0a7ba4c6.jpg",
    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/d833da4cdf6b25b7acf3ae0710d3286d.jpg"
  ],
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
storiesOf("Image", module).add("default image", () => (
  <Image src={data.images[0]} label="Image" />
));
storiesOf("Button", module).add("default Button", () => (
  <Button label="Button" />
));
