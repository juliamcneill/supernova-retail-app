import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ProductDetail from "./productDetail";

configure({ adapter: new Adapter() });

const wrapper = mount(<ProductDetail />);

describe("Product detail widget should be defined", () => {
  it("Should be defined", () => {
    expect(ProductDetail).toBeDefined();
  });
});

describe("Product detail widget should render", () => {
  it("Should render", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});

describe("Product description should render", () => {
  it("Should render", () => {
    wrapper.find({ "data-testid": "productDescription" });
  });
});

describe("Product slogan should render", () => {
  it("Should render", () => {
    wrapper.find({ "data-testid": "productSlogan" });
  });
});

describe("Product features should render", () => {
  it("Should render", () => {
    wrapper.find({ "data-testid": "productFeatures" });
  });
});

describe("Lifecycle method componentDidMount should be called", () => {
  it("Calls componentDidMount", () => {
    jest.spyOn(ProductDetail.prototype, "componentDidMount");
    const wrapper = shallow(<ProductDetail />);
    expect(ProductDetail.prototype.componentDidMount.mock.calls.length).toBe(1);
  });
});

const product = {
  product: {
    id: 1,
    name: "Camo Onesie",
    slogan: "Blend in to your crowd",
    description:
      "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    category: "Jackets",
    default_price: "140",
    features: "[{…}]",
  },
  averageRating: 3.078125,
  userToken: "575199600",
};

const averageRating = 3.078125;
const userToken = "575199600";

describe("Props should be accepted", () => {
  it("Accepts props", () => {
    const wrapper = mount(
      <ProductDetail
        product={product}
        averageRating={averageRating}
        userToken={userToken}
      />
    );
    expect(wrapper.props().product).toEqual(product);
  });
});
