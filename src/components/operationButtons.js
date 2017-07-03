import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './button';
import { executeOperation } from '../actions/operationActions';

class OperationButtons extends Component {
  renderDigitButtons() {
    const digits = ['/', '*','+', '-', '='];

    return digits.map((digit) => {
      return (
        <Button
          onClick={(event) => this.props.executeOperation(event.target.textContent)}
          label={digit}
          key={digit}
        />
      )
    })
  }

  render() {
    return (
      <div className="memory-buttons">
          {this.renderDigitButtons()}
      </div>
    )
  }
}

export default connect(null, { executeOperation })(OperationButtons);
