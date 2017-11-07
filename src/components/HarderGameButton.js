import React, { Component } from "react";
import { Button } from "reactstrap";
export class HarderGameButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Harder Game"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.buttonText === "Harder Game") {
      this.setState(
        {
          buttonText: "Easier Game"
        },
        () => {
          this.props.changeGameType("harder");
        }
      );
    } else {
      this.setState(
        {
          buttonText: "Harder Game"
        },
        () => {
          this.props.changeGameType("easier");
        }
      );
    }
  }
  render() {
    return (
      <Button
        className="btn-block"
        outline
        color="warning"
        id="gameType"
        onClick={this.handleClick}
      >
        {this.state.buttonText}
      </Button>
    );
  }
}
