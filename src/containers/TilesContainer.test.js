import React from "react";
import "../setupTests";
import { TilesContainer } from "./TilesContainer";
import { Tile } from "../components/Tile";

describe("<TilesContainer /> ", () => {
  it("renders an <ul> list", () => {
    const wrapper = shallow(<TilesContainer />);
    expect(wrapper.find("ListGroup").exists()).toBe(true);
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
    wrapper.instance().populateTileEntries();
    expect(wrapper.state("tiles")).toEqual([]);
  });
  it("should, given the w and h, the tiles state array with numbers from 1 to (w x h - 1) and '' ", () => {
    const wrapper = shallow(<TilesContainer />);
    wrapper.setState({ width: 4, height: 4 });
    wrapper.instance().populateTileEntries();
    expect(wrapper.state("tiles").length).toBe(16);
  });
  it(" for a puzzle of 3 x 3 it should have 9 tiles", () => {
    const wrapper = shallow(<TilesContainer />);
    wrapper.setState({ width: 3, height: 3 });
    wrapper.instance().populateTileEntries();
    expect(wrapper.update().find(Tile)).toHaveLength(9);
  });
  it("passes id props to <Tiles />", () => {
    const wrapper = shallow(<TilesContainer />);
    wrapper.setState({ width: 3, height: 3 });
    wrapper.instance().populateTileEntries();
    const tiles = wrapper.update().find(Tile);
    tiles.forEach((tile, i) => {
      expect(tile.props().id).toBe(i);
    });
  });
  it("passes value props to <Tiles />", () => {
    const wrapper = shallow(<TilesContainer />);
    wrapper.setState({ width: 3, height: 3 });
    wrapper.instance().populateTileEntries();
    const tiles = wrapper.update().find(Tile);
    tiles.slice(0, tiles.length - 1).forEach((tile, i) => {
      expect(tile.props().value).toBe(i + 1);
    });
    //to testing the blank tile
    expect(tiles.at(8).props().value).toBe("");
  });
  it("passes a move method as onClick prop", () => {
    const wrapper = shallow(<TilesContainer />);
    wrapper.setState({ width: 3, height: 3 });
    wrapper.instance().populateTileEntries();
    const tiles = wrapper.update().find(Tile);
    tiles.forEach(tile => {
      expect(tile.prop("onClick")).toBe(wrapper.instance().move);
      expect(tile.prop("onClick")).toBeDefined();
    });
  });
});
