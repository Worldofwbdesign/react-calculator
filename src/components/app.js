import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import ButtonsField from './buttonsField';
import Display from './display';

export default class App extends Component {
  render() {

    return (
      <div className="calculator">
        <AppBar className="calculator__header" title="Calculator" showMenuIconButton={false} zDepth={3}/>
        <Display/>
        <ButtonsField/>
      </div>
    );
  }
}
