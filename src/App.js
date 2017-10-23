import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { PuzzleContainer } from "./containers/PuzzleContainer";
import { Card, Row, Col } from "reactstrap";
class App extends Component {
  render() {
    return (
      <Row id="container">
        <Col sm="3" />
        <Col sm="6">
          <PuzzleContainer />
        </Col>
        <Col sm="3" />
      </Row>
    );
  }
}

export default App;
