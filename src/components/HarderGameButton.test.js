import React from "react";
import "../setupTests";
import { HarderGameButton } from "./HarderGameButton";

describe("<HarderGameButton", () => {
  it("should render a button", () => {
    const wrapper = shallow(<HarderGameButton />);
    expect(wrapper.find("Button")).toHaveLength(1);
  });
});
