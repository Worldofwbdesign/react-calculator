import { DO_SINGLE_OPERATION } from './types';
import { doOperation } from './operationActions';
import { onWaitingSecond } from './waitingSecondNumberActions';

export function doSingleOperation(operation) {
  return (dispatch, getState) => {
    const displayValue = getState().displayValue;
    const singleOperations = {
      'x2': (displayValue) => displayValue * displayValue,
      'x3': (displayValue) => Math.pow(displayValue, 3),
      'x5': (displayValue) => Math.pow(displayValue, 5),
      '10x': (displayValue) => Math.pow(10, displayValue),
      'sin': (displayValue) => Math.sin(displayValue),
      'cos': (displayValue) => Math.cos(displayValue),
      'tan': (displayValue) => Math.tan(displayValue),
      '√': (displayValue) => Math.sqrt(displayValue),
      'log': (displayValue) => Math.log(displayValue),
      'exp': (displayValue) => Math.exp(displayValue),
      '1/x': (displayValue) => Math.exp(1/displayValue),
      'n!': function factorial(displayValue) { return displayValue ? displayValue * factorial(displayValue - 1) : 1 }
    }
    const res = singleOperations[operation](displayValue);
    dispatch(doOperation(String(res)));
    dispatch(onWaitingSecond());
  }
}
