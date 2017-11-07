import React, { Component } from "react";
import { TilesContainer } from "./TilesContainer";
import { ResetGameButton } from "../components/ResetGameButton";
import { ResultMessageBox } from "../components/ResultMessageBox";
import { GameTimer } from "../components/GameTimer";
import { Card, CardBody, Row, Col } from "reactstrap";
import { SlidingPuzzle } from "../slidingPuzzle";
import { HarderGameButton } from "../components/HarderGameButton";
class PuzzleContainer extends Component {
  constructor(props) {
    super(props);
    this.reset = this.reset.bind(this);
    this.setResultMessge = this.setResultMessge.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.removeTimer = this.removeTimer.bind(this);
    this.changeGameType = this.changeGameType.bind(this);
    this.state = {
      slidingPuzzle: new SlidingPuzzle(3, 3),
      win: false,
      message: "",
      displayTimer: false,
      gameType: ""
    };
  }
  reset() {
    this.state.slidingPuzzle.reset();
    if (this.state.displayTimer) {
      this.removeTimer();
    }
    //render with new value for tiles
    this.forceUpdate();
  }
  setResultMessge(message) {
    this.setState({
      message
    });
    this.removeTimer();
    //dispay the message for 5 sec and remove it and reset the game
    setTimeout(() => {
      this.setState({
        message: ""
      });
      this.reset();
    }, 5000);
  }
  startTimer() {
    //if the timer is not already displayed
    if (!this.state.displayTimer) {
      this.setState({
        displayTimer: true
      });
    }
  }
  removeTimer() {
    if (this.state.displayTimer) {
      setTimeout(() => {
        this.setState({
          displayTimer: false
        });
      }, 100);
    }
  }
  changeGameType(gameType) {
    if (gameType === "harder") {
      this.setState({
        slidingPuzzle: new SlidingPuzzle(4, 4),
        gameType: "harder",
        displayTimer: false,
        message: ""
      });
    } else {
      this.setState({
        slidingPuzzle: new SlidingPuzzle(3, 3),
        gameType: "easier",
        displayTimer: false,
        message: ""
      });
    }
  }
  render() {
    return (
      <Card id="puzzleContainer">
        <CardBody>
          <Row>
            <Col sm={{ size: 3 }} />
            <Col sm={{ size: 6 }}>
              <TilesContainer
                id="tilesContainer"
                slidingPuzzle={this.state.slidingPuzzle}
                setResultMessge={this.setResultMessge}
                startTimer={this.startTimer}
                gameType={this.gameType}
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
            <Col sm={{ size: 3 }} />
            <Col sm={{ size: 3 }}>
              <ResetGameButton reset={this.reset} />
            </Col>
            <Col sm={{ size: 3 }}>
              <HarderGameButton
                changeGameType={this.changeGameType}
                gameType={this.state.gameType}
              />
            </Col>
            <Col sm={{ size: 2 }} />
          </Row>
        </CardBody>
        <CardBody>
          <Row>
            <Col sm={{ size: 4 }} />
            <Col sm={{ size: 5 }}>
              <ResultMessageBox message={this.state.message} />
            </Col>
            <Col sm={{ size: 3 }} />
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export { PuzzleContainer };
