import React, { Component } from 'react';
import { connect } from 'react-redux';

const Display = (props) => {
  return (
    <h2 className="display">{props.displayValue}</h2>
  )
}

function mapStateToProps(state) {
  return {
    displayValue: state.displayValue
  }
}

export default connect(mapStateToProps)(Display)
