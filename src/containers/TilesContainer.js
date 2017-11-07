import React, { Component } from "react";
import { Tile } from "../components/Tile";
import { ListGroup } from "reactstrap";

export class TilesContainer extends Component {
  constructor(props) {
    super(props);
    this.slidingPuzzle = this.props.slidingPuzzle;
    this.populateTileEntries = this.populateTileEntries.bind(this);
    this.move = this.move.bind(this);
  }
  componentWillMount() {
    this.populateTileEntries();
  }

  move = position => {
    this.slidingPuzzle.move(position);
    // this.setState({
    //   tiles: this.slidingPuzzle.tiles
    // });
    if (this.slidingPuzzle.gameComplete()) {
      this.props.setResultMessge("Congratulation you Won!!!");
    }
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
        onClick={this.props.startTimer}
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
