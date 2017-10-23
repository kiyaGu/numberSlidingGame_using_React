import React, { Component } from "react";
import { TilesContainer } from "./TilesContainer";
import { ResetGameButton } from "../components/ResetGameButton";
import { Card, CardBody, Row, Col } from "reactstrap";
class PuzzleContainer extends Component {
  render() {
    return (
      <Card id="puzzleContainer">
        <CardBody>
          <Row>
            <Col sm="9">
              <TilesContainer />
            </Col>
            <Col sm="3">
              <GameTimer />
            </Col>
          </Row>
        </CardBody>
        <CardBody>
          <Row>
            <Col sm="2" />
            <Col sm="4">
              <ResetGameButton />
            </Col>
          </Row>
        </CardBody>
        <CardBody>
          <Row>
            <Col sm="2" />
            <Col sm="8">
              <ResultMessageBox />
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

const GameTimer = () => {
  return null;
};

const ResultMessageBox = () => {
  return null;
};
export { PuzzleContainer, GameTimer, ResultMessageBox };
