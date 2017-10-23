import React from "react";
import "../setupTests";
import { Tile } from "./Tile";

describe("<Tile />", () => {
  it("renders an <li>", () => {
    const wrapper = shallow(<Tile />);
    expect(wrapper.find("ListGroupItem")).toHaveLength(1);
  });
  it("should have an id prop", () => {
    const wrapper = shallow(<Tile id={2} />);
    expect(wrapper.props().id).toBe(2);
  });
  it("should have a value prop", () => {
    const wrapper = shallow(<Tile value={1} />);
    expect(wrapper.props().value).toBe(1);
  });
  it("should overwrite the value of the value prop", () => {
    const wrapper = shallow(<Tile value={0} />);
    wrapper.setState({ value: 8 });
    expect(wrapper.update().state().value).toBe(8);
  });
  it("should display the current value it has", () => {
    const wrapper = mount(<Tile value={0} />);
    wrapper.setState({ value: 4 });
    expect(parseInt(wrapper.text("li"))).toBe(4);
  });
});
