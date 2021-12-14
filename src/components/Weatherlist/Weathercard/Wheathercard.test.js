import React from "react";
import { shallow } from "enzyme";
import Wheathercard from "./Wheathercard";

describe("Wheathercard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Wheathercard />);
    expect(wrapper).toMatchSnapshot();
  });
});
