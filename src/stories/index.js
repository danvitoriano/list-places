import React from "react";

import { storiesOf } from "@storybook/react";

import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Text from "../components/Text";
import Image from "../components/Image";
import Button from "../components/Button";
import Slider from "../components/Slider";
import Link from "../components/Link";

const data = {
  textLabel: "My Sample Text",
  usableAreas: 69,
  listingType: "USED",
  createdAt: "2016-11-16T04:14:02Z",
  listingStatus: "ACTIVE",
  id: 787654456,
  parkingSpaces: 1,
  updatedAt: "2016-11-16T04:14:02Z",
  owner: false,
  images: [
    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/285805119ab0761500127aebd8ab0e1d.jpg",
    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/4af1656b66b9e12efff6ce06f51926f6.jpg",
    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/895f0d4ce1e641fd5c3aad48eff83ac8.jpg",
    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/e7b5cce2d9aee78867328dfa0a7ba4c6.jpg",
    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/d833da4cdf6b25b7acf3ae0710d3286d.jpg"
  ],
  address: {
    city: "São Paulo",
    neighborhood: "Brooklin",
    geoLocation: {
      precision: "ROOFTOP",
      location: {
        lon: -46.716542,
        lat: -23.502555
      }
    }
  },
  bathrooms: 2,
  bedrooms: 3,
  pricingInfos: {
    yearlyIptu: "0",
    price: "405000",
    businessType: "SALE",
    monthlyCondoFee: "495"
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
storiesOf("Slider", module).add("default Slider", () => (
  <Slider images={data.images} />
));
storiesOf("Link", module).add("default Link", () => <Link label="Link" />);
