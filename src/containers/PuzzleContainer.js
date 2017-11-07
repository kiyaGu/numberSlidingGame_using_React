import React, { Component } from "react";
import { TilesContainer } from "./TilesContainer";
import { ResetGameButton } from "../components/ResetGameButton";
import { ResultMessageBox } from "../components/ResultMessageBox";
import { GameTimer } from "../components/GameTimer";
import { Card, CardBody, Row, Col } from "reactstrap";
import { SlidingPuzzle } from "../slidingPuzzle";

class PuzzleContainer extends Component {
  constructor(props) {
    super(props);
    this.slidingPuzzle = new SlidingPuzzle(3, 3);
    this.reset = this.reset.bind(this);
    this.setResultMessge = this.setResultMessge.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.removeTimer = this.removeTimer.bind(this);
    this.state = {
      win: false,
      message: "",
      displayTimer: false
    };
  }
  reset() {
    this.slidingPuzzle.reset();
    this.forceUpdate();
  }
  setResultMessge(message) {
    this.setState({
      message
    });
    setTimeout(() => {
      this.setState({
        message: ""
      });
      this.reset();
    }, 5000);
  }
  startTimer() {
    if (!this.state.displayTimer) {
      this.setState({
        displayTimer: true
      });
    }
  }
  removeTimer() {
    setTimeout(() => {
      this.setState({
        displayTimer: false
      });
    }, 100);
  }
  render() {
    return (
      <Card id="puzzleContainer">
        <CardBody>
          <Row>
            <Col sm={{ size: 1 }} />
            <Col sm={{ size: 7 }}>
              <TilesContainer
                id="tilesContainer"
                slidingPuzzle={this.slidingPuzzle}
                setResultMessge={this.setResultMessge}
                startTimer={this.startTimer}
              />
            </Col>
            <Col sm={{ size: 3 }}>
              <GameTimer
                id="gameTimer"
                setResultMessge={this.setResultMessge}
                displayTimer={this.state.displayTimer}
                removeTimer={this.removeTimer}
              />
            </Col>
          </Row>
        </CardBody>
        <CardBody>
          <Row>
            <Col sm={{ size: 2 }} />
            <Col sm={{ size: 4 }}>
              <ResetGameButton reset={this.reset} />
            </Col>
          </Row>
        </CardBody>
        <CardBody>
          <Row>
            <Col sm={{ size: 2 }} />
            <Col sm={{ size: 5 }}>
              <ResultMessageBox message={this.state.message} />
            </Col>
            <Col sm={{ size: 4 }} />
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export { PuzzleContainer };
