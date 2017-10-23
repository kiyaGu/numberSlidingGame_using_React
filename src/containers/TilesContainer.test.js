import React from "react";
import "../setupTests";
import TilesContainer from "./TilesContainer";
import { Tile } from "../components/Tile";

describe("<TilesContainer /> ", () => {
  it("renders an <ul> list", () => {
    const wrapper = shallow(<TilesContainer />);
    expect(wrapper.find("ul").exists()).toBe(true);
  });
  it("should have a width state", () => {
    const wrapper = shallow(<TilesContainer />);
    expect(wrapper.state("width")).toBe(0);
  });
  it("should have a height state", () => {
    const wrapper = shallow(<TilesContainer />);
    expect(wrapper.state("height")).toBe(0);
  });
  it("should have a tiles state", () => {
    const wrapper = shallow(<TilesContainer />);
    expect(wrapper.state("tiles")).toEqual([]);
  });
  it("should update the size state based on the tiles array length", () => {
    const wrapper = shallow(<TilesContainer />);
    wrapper.setState({ tiles: [1, 2, 3, 4, 5, 6, 7, 8, ""] });
    expect(wrapper.state("tiles").length).toBe(9);
  });
  it(" for a puzzle of 3 x 3 it should have 9 tiles", () => {
    const wrapper = shallow(<TilesContainer />);
    expect(wrapper.find(Tile)).toHaveLength(9);
  });
});
