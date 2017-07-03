import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './button';

class MemoryButtons extends Component {
  renderDigitButtons() {
    const digits = ['MC', 'MR','M+', 'M-', 'MS'];

    return digits.map((digit) => {
      return <Button
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
