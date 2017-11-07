import React, { Component } from "react";
import { Button } from "reactstrap";
export class ResetGameButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.reset();
  }
  render() {
    return (
      <Button
        className="btn-block"
        outline
        color="danger"
        id="reset"
        onClick={this.handleClick}
      >
        Reset
      </Button>
    );
  }
}
