import React, { Component } from "react";
import "./App.css";
import { PuzzleContainer } from "./containers/PuzzleContainer";
import { Row, Col } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Row id="container">
        <Col sm={{ size: 3 }} />
        <Col sm={{ size: 6 }}>
          <PuzzleContainer />
        </Col>
        <Col sm={{ size: 3 }} />
      </Row>
    );
  }
}

export default App;
