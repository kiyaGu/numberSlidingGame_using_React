import React from "react";
import "../setupTests";
import { ResetButton } from "./ResetButton";
describe("<ResetButton />", () => {
  it("renders a button", () => {
    const wrapper = shallow(<ResetButton />);

    expect(wrapper.find("button")).toHaveLength(1);
  });
});
