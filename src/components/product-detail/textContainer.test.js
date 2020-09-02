import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TextContainer from "./textContainer";

configure({ adapter: new Adapter() });

const wrapper = mount(<TextContainer />);

describe("Text container component should be defined", () => {
  it("Should be defined", () => {
    expect(TextContainer).toBeDefined();
  });
});

describe("Text container component should render", () => {
  it("Should render without crashing", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});

describe("Product stars should render", () => {
  it("Should render", () => {
    wrapper.find({ "data-testid": "productStars" });
  });
});

describe("Product category should render", () => {
  it("Should render", () => {
    wrapper.find({ "data-testid": "productCategory" });
  });
});

describe("Product name should render", () => {
  it("Should render", () => {
    wrapper.find({ "data-testid": "productName" });
  });
});

describe("Product price should render", () => {
  it("Should render", () => {
    wrapper.find({ "data-testid": "productPrice" });
  });
});

describe("Product styles menu should render", () => {
  it("Should render", () => {
    wrapper.find({ "data-testid": "productStylesMenu" });
  });
});

describe("Product size dropdown menu should render", () => {
  it("Should render", () => {
    wrapper.find({ "data-testid": "productSizeDropdown" });
  });
});

describe("Product quantity dropdown menu should render", () => {
  it("Should render", () => {
    wrapper.find({ "data-testid": "productQuantityDropdown" });
  });
});

describe("Product add to bag button should render", () => {
  it("Should render", () => {
    wrapper.find({ "data-testid": "productAddToBagButton" });
  });
});

describe("Product favorite button should render", () => {
  it("Should render", () => {
    wrapper.find({ "data-testid": "productFavoriteButton" });
  });
});

const product = {
  id: 1,
  name: "Camo Onesie",
  slogan: "Blend in to your crowd",
  description:
    "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  category: "Jackets",
  default_price: "140",
  features: "[{…}]",
};

const styles = [
  {
    style_id: 1,
    name: "Forest Green & Black",
    original_price: "140",
    sale_price: "0",
    "default?": 1,
    photos: "[{…}, {…}, {…}, {…}, {…}, {…}]",
    skus: "{L: 10, M: 17, S: 16, XL: 15, XS: 8}",
  },
];

const selectedStyle = {
  style_id: 1,
  name: "Forest Green & Black",
  original_price: "140",
  sale_price: "0",
  "default?": 1,
  photos: "[{…}, {…}, {…}, {…}, {…}, {…}]",
  skus: "{L: 10, M: 17, S: 16, XL: 15, XS: 8}",
};

const userToken = "575199600";

const textContainerVisibility = "text-container-visible";

const averageRating = 3.078125;

const updateSelectedStyle = function () {
  console.log("Example function here");
};

describe("Props should be accepted", () => {
  it("Accepts props", () => {
    const wrapper = mount(
      <TextContainer
        product={product}
        styles={styles}
        selectedStyle={selectedStyle}
        userToken={userToken}
        textContainerVisibility={textContainerVisibility}
        averageRating={averageRating}
        updateSelectedStyle={updateSelectedStyle}
      />
    );
    expect(wrapper.props().product).toEqual(product);
  });
});
