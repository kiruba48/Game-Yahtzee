import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords:  [ 'one', 'two', 'three', 'four', 'five', 'six' ],
    val: 5
  }
  render() {
    const { numberWords, locked, idx, val, disabled, rolling } = this.props;
    let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-3x `
    if(locked) classes += 'Die-locked ';
    if(rolling) classes += 'Die-rolling';
    return (
      <i
        className={classes}
        onClick={() => this.props.handleClick(idx)}
        disabled={disabled}
      >
      </i>
    );
  }
}

export default Die;
