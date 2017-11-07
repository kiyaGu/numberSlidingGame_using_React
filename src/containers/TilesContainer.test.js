import React from "react";
import "../setupTests";
import { TilesContainer } from "./TilesContainer";
import { Tile } from "../components/Tile";
import { SlidingPuzzle } from "../slidingPuzzle";

describe("<TilesContainer /> ", () => {
  it("renders an <ul> list", () => {
    const wrapper = shallow(<TilesContainer />);
    console.log(wrapper);
    wrapper.instance().slidingPuzzle = new SlidingPuzzle(3, 3);

    expect(wrapper.find("ListGroup").exists()).toBe(true);
  });

  it("passes id props to <Tiles />", () => {
    const wrapper = shallow(<TilesContainer />);
    // wrapper.setState({ width: 3, height: 3 });
    wrapper.instance().populateTileEntries();
    const tiles = wrapper.update().find(Tile);
    tiles.forEach((tile, i) => {
      expect(tile.props().id).toBe(i);
    });
  });

  it("passes a move method as onClick prop", () => {
    const wrapper = shallow(<TilesContainer />);
    // wrapper.setState({ width: 3, height: 3 });
    wrapper.instance().populateTileEntries();
    const tiles = wrapper.update().find(Tile);
    tiles.forEach(tile => {
      expect(tile.prop("onClick")).toBe(wrapper.instance().move);
      expect(tile.prop("onClick")).toBeDefined();
    });
  });
});
