import React from "react";
import ReactDOM from "react-dom";
import Card from "../Card";
import { mount } from "enzyme";

const data = {
  id: 787654456,
  parkingSpaces: 1,
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
      location: {
        lon: -46.787,
        lat: -46.897
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

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card key="1" data={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("should display div", () => {
  const wrapper = mount(<Card key="1" data={data} />);
  expect(wrapper.find("div").length).toBe(12);
});

test("should display a", () => {
  const wrapper = mount(<Card key="1" data={data} />);
  expect(wrapper.find("a").length).toBe(3);
});

test("should display h2", () => {
  const wrapper = mount(<Card key="1" data={data} />);
  expect(wrapper.find("h2").length).toBe(1);
});

test("should display img", () => {
  const wrapper = mount(<Card key="1" data={data} />);
  expect(wrapper.find("img").length).toBe(7);
});

test("should display span", () => {
  const wrapper = mount(<Card key="1" data={data} />);
  expect(wrapper.find("span").length).toBe(1);
});
