import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const active = this.props.score === undefined;
    const { name, doScore, description, score } = this.props;
    return (
      <tr 
        className={`RuleRow RuleRow-${active ? 'active' : 'disabled'}`} 
        onClick={ active ? doScore : null }>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{ active ? description : score}</td>
      </tr>
    )
  }
}

export default RuleRow;