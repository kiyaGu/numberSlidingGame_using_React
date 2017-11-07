import React, { Component } from "react";
import ReactCountdownClock from "react-countdown-clock";

export class GameTimer extends Component {
  constructor(props) {
    super(props);
    this.timeDone = this.timeDone.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      displayTimer: nextProps.displayTimer
    });
  }
  timeDone() {
    this.props.setResultMessge("Oops, you LOST!!!");
    this.props.removeTimer();
  }
  render() {
    if (this.props.displayTimer) {
      return (
        <div>
          <ReactCountdownClock
            seconds={180}
            color="#fec85d"
            alpha={0.7}
            size={150}
            onComplete={this.timeDone}
          />
        </div>
      );
    }
    return null;
  }
}
