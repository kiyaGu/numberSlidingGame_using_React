import React, { Component } from "react";
import { Tile } from "../components/Tile";

class TilesContainer extends Component {
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
