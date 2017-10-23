import React, { Component } from "react";
import { Tile } from "../components/Tile";

class TilesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0
    };
  }
  render() {
    return (
      <ul>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </ul>
    );
  }
}
export default TilesContainer;
