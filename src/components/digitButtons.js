import React, { Component } from 'react';
import { connect } from 'react-redux';
import { executeDisplayValue, clearDisplayValue, deleteLastDigit, changeSign, addDot } from '../actions/displayValueActions';
import { clearState } from '../actions';
import Button from './button';

class DigitButtons extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(val) {
    const { executeDisplayValue, clearDisplayValue, deleteLastDigit, changeSign, addDot, clearState } = this.props;

    switch (val) {
      case 'CE':
        return clearDisplayValue();
      case 'C':
        return clearState();
      case '<':
        return deleteLastDigit();
      case '\u00B1':
        return changeSign();
      case '.':
        return addDot();
      default:
        executeDisplayValue(val);
    }
    this.props.changeDisplayValue
  }

  renderDigitButtons() {
    const digits = ['CE', 'C','<', '7', '8', '9', '4', '5', '6', '1', '2', '3', '\u00B1', '0', '.'];

    return digits.map((digit) => {
      return <Button
        onClick={(event) => this.onButtonClick(event.target.textContent)}
        label={digit}
        key={digit}
        primary={true}
      />
    })
  }

  render() {
    return (
      <div className="digit-buttons">
          {this.renderDigitButtons()}
      </div>
    )
  }
}

export default connect(null, { executeDisplayValue, clearDisplayValue, deleteLastDigit, changeSign, addDot, clearState })(DigitButtons);
