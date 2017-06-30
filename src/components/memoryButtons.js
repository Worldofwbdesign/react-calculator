import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import RaisedButtonStyle from '../../style/components/RaisedButton';

class MemoryButtons extends Component {
  renderDigitButtons() {
    const digits = ['MC', 'MR','M+', 'M-', 'MS'];

    return digits.map((digit) => {
      return <RaisedButton
        {...RaisedButtonStyle}
        className="btn"
        onClick={(event) => alert(event.target.textContent)}
        label={digit}
        key={digit}
      />
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

export default connect()(MemoryButtons);
