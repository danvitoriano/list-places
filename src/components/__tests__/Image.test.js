import React from "react";
import ReactDOM from "react-dom";
import Image from "../Image";
import { shallow } from "enzyme";

const data = {
  textLabel: "My Sample Image",
  images: [
    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/285805119ab0761500127aebd8ab0e1d.jpg",
    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/4af1656b66b9e12efff6ce06f51926f6.jpg",
    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/895f0d4ce1e641fd5c3aad48eff83ac8.jpg",
    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/e7b5cce2d9aee78867328dfa0a7ba4c6.jpg",
    "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/d833da4cdf6b25b7acf3ae0710d3286d.jpg"
  ]
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Image src={data.images[0]} label={data.textLabel} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("should display img", () => {
  const wrapper = shallow(
    <Image src={data.images[0]} label={data.textLabel} />
  );
  expect(wrapper.find("img").length).toBe(1);
});
