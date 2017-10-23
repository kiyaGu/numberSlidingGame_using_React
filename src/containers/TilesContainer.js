import React, { Component } from "react";
import { Tile } from "../components/Tile";
import { ListGroup } from "reactstrap";

export class TilesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      tiles: []
    };
    this.populateTileEntries = this.populateTileEntries.bind(this);
  }
  componentWillMount() {
    this.populateTileEntries();
  }
  populateTileEntries() {
    let tiles = [],
      puzzleSize = this.state.width * this.state.height;
    if (puzzleSize > 1) {
      for (let i = 1; i < puzzleSize; i++) {
        tiles.push(i);
      }
      if (tiles.length > 1) {
        tiles.push("");
      }
    }
    this.setState({
      tiles
    });
  }
  render() {
    return this.state.tiles ? (
      <ListGroup>
        {this.state.tiles.map((tile, index) => (
          <Tile id={index} key={index} value={tile} />
        ))}
      </ListGroup>
    ) : null;
  }
}
