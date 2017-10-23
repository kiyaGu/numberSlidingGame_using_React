import React, { Component } from "react";

export class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
    this.id = this.props.id;
  }
  render() {
    return (
      <li id={this.id} value={this.state.value}>
        {this.state.value}
      </li>
    );
  }
}
