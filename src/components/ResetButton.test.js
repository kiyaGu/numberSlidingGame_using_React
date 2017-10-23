import React from "react";
import "../setupTests";
import { ResetButton } from "./ResetButton";
describe("<ResetButton />", () => {
  it("renders a button", () => {
    const wrapper = shallow(<ResetButton />);
    expect(wrapper.exists("button")).toBe(true);
  });
  it("renders a button with class btn", () => {
    const wrapper = shallow(<ResetButton />);
    expect(wrapper.find("button").hasClass("btn")).toBe(true);
  });
  it("renders a button with an id of reset", () => {
    const wrapper = shallow(<ResetButton />);
    expect(wrapper.find("button#reset")).toHaveLength(1);
  });
  it("renders a button with a text value Reset", () => {
    const wrapper = shallow(<ResetButton />);
    expect(wrapper.text()).toBe("Reset");
  });
});
