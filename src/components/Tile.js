import React, { Component } from "react";
import { ListGroupItem } from "reactstrap";
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
      <ListGroupItem id={this.id} value={this.state.value}>
        {this.state.value}
      </ListGroupItem>
    );
  }
}
