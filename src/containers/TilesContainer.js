import React, { Component } from "react";
import { Tile } from "../components/Tile";

class TilesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      tiles: []
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
