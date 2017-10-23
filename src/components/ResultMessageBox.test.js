import React from "react";
import "../setupTests";
import { ResultMessageBox } from "./ResultMessageBox";
describe("<ReaultMessageBox />", () => {
  it("renders a div with an id of resultContainer", () => {
    const wrapper = shallow(<ResultMessageBox />);
    expect(wrapper.find("div#resultContainer")).toHaveLength(1);
  });
});
