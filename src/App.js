import React, { Component } from "react";
import "./App.css";
import { PuzzleContainer } from "./containers/PuzzleContainer";
import { Row, Col } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Row id="container">
        <Col sm={{ size: 2 }} />
        <Col sm={{ size: 7 }}>
          <PuzzleContainer />
        </Col>
        <Col sm={{ size: 2 }} />
      </Row>
    );
  }
}

export default App;
