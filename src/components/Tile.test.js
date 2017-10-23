import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Tile } from "./Tile";

configure({ adapter: new Adapter() });

describe("<Tile />", () => {
  it("renders an <li>", () => {
    const wrapper = shallow(<Tile />);
    expect(wrapper.find("li")).toHaveLength(1);
  });
});
