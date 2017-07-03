import { DO_OPERATION, SET_OPERATION } from './types';
import { setPrevValue } from './valueActions';
import { setLastValue } from './lastValueActions';
import { onWaitingSecond, offWaitingSecond } from './waitingSecondNumberActions';
import { updateOperation, addHistoryItem, clearOperation } from './operationsHistoryActions';

export function executeOperation(operation) {
  return (dispatch, getState) => {
    const { prevValue, displayValue, lastValue, stateOperation} = getState();
    const nextValue = displayValue;

    if (operation === '=') {
      if (!lastValue) {
        dispatch(setLastValue(nextValue));
        dispatch(formatOperation(parseFloat(prevValue), parseFloat(nextValue), stateOperation, operation));
      } else {
        dispatch(formatOperation(parseFloat(nextValue), parseFloat(lastValue), stateOperation, operation));
      }
      dispatch(onWaitingSecond());
    }

    else {
      if (prevValue) {
        if (!lastValue) {
          dispatch(setLastValue(nextValue));
          dispatch(formatOperation(parseFloat(prevValue), parseFloat(nextValue), operation));
        } else {
          dispatch(formatOperation(parseFloat(nextValue), parseFloat(lastValue), operation));
        }
      } else {
        dispatch(setPrevValue(nextValue));
      }
      dispatch(setOperation(operation));
      dispatch(onWaitingSecond());
      dispatch(updateOperation(nextValue + ' ' + operation));
    }
  }
}

export function setOperation(operation) {
  return {
    type: SET_OPERATION,
    payload: operation
  }
}

export function formatOperation(prevValue, nextValue, operation, clickOperation) {
  return (dispatch, getState) => {
    const { currentOperation } = getState();
    const operations = {
      '/': (prevValue, nextValue) => prevValue / nextValue,
      'x': (prevValue, nextValue) => prevValue * nextValue,
      '+': (prevValue, nextValue) => prevValue + nextValue,
      '-': (prevValue, nextValue) => prevValue - nextValue,
    }
    const res = operations[operation](prevValue, nextValue);
    if (clickOperation === '=') {
      dispatch(addHistoryItem(`${currentOperation} ${nextValue} = ${res}`));
      dispatch(clearOperation());
    }
    dispatch(doOperation(String(res)));
  }
}

export function doOperation(res) {
  return {
    type: DO_OPERATION,
    payload: res
  }
}
