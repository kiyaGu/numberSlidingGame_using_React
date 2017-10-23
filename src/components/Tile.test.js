import React from "react";
import "../setupTests";
import { Tile } from "./Tile";

describe("<Tile />", () => {
  it("renders an <li>", () => {
    const wrapper = shallow(<Tile />);
    expect(wrapper.find("li")).toHaveLength(1);
  });
});
