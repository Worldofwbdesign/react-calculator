import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import RaisedButtonStyle from '../../style/components/RaisedButton';

export default class Button extends Component {
  render() {
    return (
      <RaisedButton
        {...RaisedButtonStyle}
        {...this.props}
      />
    )
  }
}
