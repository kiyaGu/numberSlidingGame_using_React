import React, { Component } from "react";
import { TilesContainer } from "./TilesContainer";
import { ResetGameButton } from "../components/ResetGameButton";
import { ResultMessageBox } from "../components/ResultMessageBox";
import { GameTimer } from "../components/GameTimer";
import { Card, CardBody, Row, Col } from "reactstrap";

class PuzzleContainer extends Component {
  render() {
    return (
      <Card id="puzzleContainer">
        <CardBody>
          <Row>
            <Col sm={{ size: 9 }}>
              <TilesContainer />
            </Col>
            <Col sm={{ size: 3 }}>
              <GameTimer />
            </Col>
          </Row>
        </CardBody>
        <CardBody>
          <Row>
            <Col sm={{ size: 2 }} />
            <Col sm={{ size: 4 }}>
              <ResetGameButton />
            </Col>
          </Row>
        </CardBody>
        <CardBody>
          <Row>
            <Col sm={{ size: 2 }} />
            <Col sm={{ size: 8 }}>
              <ResultMessageBox />
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}
export { PuzzleContainer };
