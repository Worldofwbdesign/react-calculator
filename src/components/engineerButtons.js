import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './button';
import { doSingleOperation } from '../actions/singleOperationActions';

class engineerButtons extends Component {
  renderDigitButtons() {
    const buttons = ['x2', 'x3', 'x5', 'sin', 'cos', 'tan', '√', '10x', 'log', 'exp', '1/x', 'ln', 'n!'];

    return buttons.map((button, index) => {
      const btnLabel = index < 3 ? <span key={button}>x<sup>{index + 2}</sup></span> : button;
      return (
        <Button
          onClick={(event) => this.props.doSingleOperation(button)}
          children={btnLabel}
          key={button}
          secondary={true}
        />
      )
    })
  }

  render() {
    return (
      <div className="engineer-buttons">
          {this.renderDigitButtons()}
          <Button
            className="btn_disabled"
            label='dms'
            key={'DMS'}
            disabled={true}
          />
          <Button
            className="btn_disabled"
            label='deg'
            key={'DEG'}
            disabled={true}
          />
      </div>
    )
  }
}

export default connect(null, { doSingleOperation })(engineerButtons);
