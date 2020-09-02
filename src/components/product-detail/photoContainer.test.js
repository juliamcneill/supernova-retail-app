import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PhotoContainer from "./photoContainer";

configure({ adapter: new Adapter() });

const wrapper = mount(<PhotoContainer />);

describe("Photo container component should be defined", () => {
  it("Should be defined", () => {
    expect(PhotoContainer).toBeDefined();
  });
});

describe("Photo container component should render", () => {
  it("Should render without crashing", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});

describe("Main product photo should render", () => {
  it("Should render", () => {
    wrapper.find({ "data-testid": "mainProductPhoto" });
  });
});

describe("Product photo icons should render", () => {
  it("Should render", () => {
    wrapper.find({ "data-testid": "productPhotoIcons" });
  });
});

const selectedStyle = {
  style_id: 1,
  name: "Forest Green & Black",
  original_price: "140",
  sale_price: "0",
  "default?": 1,
  photos: "[{…}, {…}, {…}, {…}, {…}, {…}]",
  skus: "{L: 10, M: 17, S: 16, XL: 15, XS: 8}",
};

const updateTextContainerVisibility = function () {
  console.log("Example function here");
};

describe("Props should be accepted", () => {
  it("Accepts props", () => {
    const wrapper = mount(
      <PhotoContainer
        selectedStyle={selectedStyle}
        updateTextContainerVisibility={updateTextContainerVisibility}
      />
    );
    expect(wrapper.props().selectedStyle).toEqual(selectedStyle);
  });
});
