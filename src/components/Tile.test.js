import React from "react";
import "../setupTests";
import { Tile } from "./Tile";

describe("<Tile />", () => {
  it("renders an <ListGroupItem>", () => {
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

  it("should display the current value it has", () => {
    const wrapper = mount(<Tile value={2} />);
    expect(parseInt(wrapper.text("li"))).toBe(2);
  });
  it("should call onClick with id as argument when clicked", () => {
    const mockOnClick = jest.fn();
    const id = 2;
    const wrapper = shallow(<Tile id={id} onClick={mockOnClick} />);
    wrapper.find("ListGroupItem").simulate("click");
    expect(mockOnClick).toBeCalledWith(id);
  });
});
