import React from "react";
import "../setupTests";
import { ResultMessageBox } from "./ResultMessageBox";
describe("<ResultMessageBox />", () => {
  it("renders a div with an id of resultContainer", () => {
    const wrapper = shallow(<ResultMessageBox />);
    expect(wrapper.find("div#resultMessage")).toHaveLength(1);
  });
});
