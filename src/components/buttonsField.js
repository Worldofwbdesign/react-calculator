import React from 'react';
import Paper from 'material-ui/Paper';
import EngineerButtons from './engineerButtons';
import MemoryButtons from './memoryButtons';
import DigitButtons from './digitButtons';
import OperationButtons from './operationButtons';
import muiThemeable from 'material-ui/styles/muiThemeable';
import ExchangeButtons from './currencyButtons';

const ButtonsField = (props) => {
  const style = {
    height: '100%',
    width: '100%',
    textAlign: 'center',
  };
  return (
    <Paper className="calculator__digits-field" style={style} zDepth={2}>
      <EngineerButtons/>
      <MemoryButtons/>
      <DigitButtons/>
      <OperationButtons/>
      <ExchangeButtons/>
    </Paper>
  )
}

export default muiThemeable()(ButtonsField);
