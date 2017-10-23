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
});
