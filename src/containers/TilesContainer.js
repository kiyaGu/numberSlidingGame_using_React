import React, { Component } from "react";
import { Tile } from "../components/Tile";
import { ListGroup } from "reactstrap";

export class TilesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slidingPuzzle: this.props.slidingPuzzle,
      gameWidth: ""
    };

    this.populateTileEntries = this.populateTileEntries.bind(this);
    this.move = this.move.bind(this);
    this.changeGame = this.changeGame.bind(this);
  }
  componentWillMount() {
    this.changeGame();
    this.populateTileEntries();
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.slidingPuzzle.width !== nextProps.slidingPuzzle.width) {
      //callback as state change may not be reflected instantly
      this.setState(
        {
          slidingPuzzle: nextProps.slidingPuzzle
        },
        () => {
          this.changeGame();
        }
      );
    }
  }
  move = position => {
    this.state.slidingPuzzle.move(position);
    if (this.state.slidingPuzzle.gameComplete()) {
      this.props.setResultMessge("Congratulation you Won!!!");
    }
    //making react rerender
    this.forceUpdate();
  };

  populateTileEntries() {
    this.state.slidingPuzzle.mixTiles();
  }
  changeGame() {
    //this is to modify the number of lists to show in a row
    if (this.state.slidingPuzzle.width === 4) {
      this.setState({
        gameWidth: "harder-game"
      });
    } else {
      this.setState({
        gameWidth: "w-25"
      });
    }
    this.populateTileEntries();
  }
  render() {
    return this.state.slidingPuzzle.tiles ? (
      <ListGroup
        id="lists"
        className="d-flex flex-row flex-wrap align-content-center"
        onClick={this.props.startTimer}
      >
        {this.state.slidingPuzzle.tiles.map((tile, index) => {
          return (
            <Tile
              id={index}
              key={index}
              value={tile}
              onClick={this.move}
              gameWidth={this.state.gameWidth}
              changeGame={this.changeGame}
            />
          );
        })}
      </ListGroup>
    ) : null;
  }
}
