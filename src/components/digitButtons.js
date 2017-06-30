import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { changeDisplayValue } from '../actions';
import RaisedButtonStyle from '../../style/components/RaisedButton'

class DigitButtons extends Component {
  renderDigitButtons() {
    const digits = ['CE', 'C','<', '7', '8', '9', '4', '5', '6', '1', '2', '3', '\u00B1', '0', '.'];

    return digits.map((digit) => {
      return <RaisedButton
        {...RaisedButtonStyle}
        className="btn"
        onClick={(event) => this.props.changeDisplayValue(event.target.textContent)}
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

export default connect(null, { changeDisplayValue })(DigitButtons);
