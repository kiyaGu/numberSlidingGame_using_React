import React, { Component } from "react";
import { Tile } from "../components/Tile";
import { ListGroup } from "reactstrap";
import { SlidingPuzzle } from "../slidingPuzzle";

export class TilesContainer extends Component {
  constructor(props) {
    super(props);
    this.populateTileEntries = this.populateTileEntries.bind(this);
    this.move = this.move.bind(this);
    this.slidingPuzzle = new SlidingPuzzle(3, 3);
  }
  componentWillMount() {
    this.populateTileEntries();
  }

  move = position => {
    this.slidingPuzzle.move(position);
    // this.setState({
    //   tiles: this.slidingPuzzle.tiles
    // });
    this.forceUpdate();
  };
  populateTileEntries() {
    this.slidingPuzzle.mixTiles();
  }
  render() {
    return this.slidingPuzzle.tiles ? (
      <ListGroup
        id="lists"
        className="d-flex flex-row flex-wrap align-content-center"
      >
        {this.slidingPuzzle.tiles.map((tile, index) => {
          return (
            <Tile id={index} key={index} value={tile} onClick={this.move} />
          );
        })}
      </ListGroup>
    ) : null;
  }
}
