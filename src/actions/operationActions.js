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
        dispatch(doOperation(parseFloat(prevValue), parseFloat(nextValue), stateOperation, operation));
      } else {
        dispatch(doOperation(parseFloat(nextValue), parseFloat(lastValue), stateOperation, operation));
      }
      dispatch(onWaitingSecond());
    }

    else {
      if (prevValue) {
        if (!lastValue) {
          dispatch(setLastValue(nextValue));
          dispatch(doOperation(parseFloat(prevValue), parseFloat(nextValue), operation));
        } else {
          dispatch(doOperation(parseFloat(nextValue), parseFloat(lastValue), operation));
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

export function doOperation(prevValue, nextValue, operation, clickOperation) {
  return (dispatch, getState) => {
    const { currentOperation } = getState();
    const operations = {
      '/': (prevValue, nextValue) => prevValue / nextValue,
      '*': (prevValue, nextValue) => prevValue * nextValue,
      '+': (prevValue, nextValue) => prevValue + nextValue,
      '-': (prevValue, nextValue) => prevValue - nextValue,
    }
    const res = operations[operation](prevValue, nextValue);
    if (clickOperation === '=') {
      dispatch(addHistoryItem(`${currentOperation} ${nextValue} = ${res}`));
      dispatch(clearOperation());
    }
    dispatch({
      type: DO_OPERATION,
      payload: res
    })
  }


}
