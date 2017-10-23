import React from "react";
import "../setupTests";
import { ResetGameButton } from "./ResetGameButton";

describe("<ResetButton />", () => {
  it("renders a button", () => {
    const wrapper = shallow(<ResetGameButton />);
    expect(wrapper.exists("Button")).toBe(true);
  });
  it("renders a button with class btn", () => {
    const wrapper = shallow(<ResetGameButton />);
    expect(wrapper.find("Button").hasClass("btn-block")).toBe(true);
  });
  it("renders a button with an id of reset", () => {
    const wrapper = shallow(<ResetGameButton />);
    expect(wrapper.find("Button#reset")).toHaveLength(1);
  });
  it("renders a button with a text value Reset", () => {
    const wrapper = mount(<ResetGameButton />);
    expect(wrapper.find("Button").text()).toBe("Reset");
  });
});
