import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TilesContainer from "./TilesContainer";
import { Tile } from "../components/Tile";

configure({ adapter: new Adapter() });

describe("<TilesContainer /> ", () => {
  it("renders an <ul> list", () => {
    const wrapper = shallow(<TilesContainer />);
    expect(wrapper.find("ul").exists()).toBe(true);
  });
  it("should have a size state", () => {
    const wrapper = shallow(<TilesContainer />);
    expect(wrapper.state("size")).toEqual(0);
  });
  it("for a puzzle of 3 x 3 the size state should equal to 9", () => {
    const wrapper = shallow(<TilesContainer />);
    wrapper.setState({ size: 9 });
    expect(wrapper.state("size")).toEqual(9);
  });
  it(" for a puzzle of 3 x 3 it should have 9 tiles", () => {
    const wrapper = shallow(<TilesContainer />);
    expect(wrapper.find(Tile)).toHaveLength(9);
  });
});
