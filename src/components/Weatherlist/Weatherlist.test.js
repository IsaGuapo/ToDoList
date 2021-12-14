import React from "react";
import { shallow } from "enzyme";
import Wheatherlist from "./Weatherlist";

describe("Wheatherlist", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Wheatherlist />);
    expect(wrapper).toMatchSnapshot();
  });
});
