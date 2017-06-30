import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import RaisedButtonStyle from '../../style/components/RaisedButton';

class engineerButtons extends Component {
  renderDigitButtons() {
    const digits = ['x2', 'xy','sin', 'cos', 'tan', 'x3', '√', '10x', 'log', 'exp', 'mod', '1/x', 'ln', 'dms', 'deg'];

    return digits.map((digit) => {
      return <RaisedButton
        {...RaisedButtonStyle}
        className="btn"
        onClick={(event) => alert(event.target.textContent)}
        label={digit}
        key={digit}
        fullWidth={true}
        secondary={true}
      />
    })
  }

  render() {
    return (
      <div className="engineer-buttons">
          {this.renderDigitButtons()}
      </div>
    )
  }
}

export default connect()(engineerButtons);
