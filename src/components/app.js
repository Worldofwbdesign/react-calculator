import React, { Component } from 'react';
import ButtonsField from './buttonsField';
import Display from './display';
import OperationsHistory from './operationsHistory';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="calculator">
          <div className="calculator-wrapp">
            <Display/>
            <ButtonsField/>
          </div>
          <div className="operations-history">
            <OperationsHistory/>
          </div>
        </div>
      </div>
    );
  }
}
