import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import AppBarStyle from '../../style/components/AppBar';

const Display = (props) => {
  return (
    <div className="display-wrapp">
      <div className="current-operation">
        {props.currentOperation}
      </div>
      <AppBar
        {...AppBarStyle}
        title={props.displayValue}
        showMenuIconButton={false}
        zDepth={3} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    displayValue: state.displayValue,
    currentOperation: state.currentOperation
  }
}

export default connect(mapStateToProps)(Display);
