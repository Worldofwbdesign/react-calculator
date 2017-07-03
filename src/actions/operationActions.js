import { DO_OPERATION, CHANGE_CURRENT_OPERATION, SET_CURRENT_OPERATION, CONVERT_OPERATION } from './types';
import { onWaitingSecond, offWaitingSecond } from './waitingSecondNumberActions';
import { updateOperation, addHistoryItem, clearOperation } from './operationsHistoryActions';
import { toggleReadyResult } from './resultIsReadyActions';

export function executeOperation(operation) {
  return (dispatch, getState) => {
    const { displayValue } = getState();
    dispatch(updateOperation(displayValue + operation));
    dispatch(onWaitingSecond());
    if (operation !== '=') {
      dispatch(changeCurrentOperation(displayValue + operation));
      dispatch(toggleReadyResult());
    } else {
      dispatch(changeCurrentOperation(displayValue));
      dispatch(convertOperation());
      dispatch(toggleReadyResult())
    }
  }
}

export function convertOperation() {
  return (dispatch, getState) => {
    const { currentOperationFunction } = getState();
    const operation = new Function('currentOperationFunction', 'return ' + currentOperationFunction);
    const res = operation(currentOperationFunction);
    dispatch(doOperation(String(res)));
    dispatch(setCurrentOperation(String(res)));
  }
}

export function changeCurrentOperation(val) {
  return {
    type: CHANGE_CURRENT_OPERATION,
    payload: val
  }
}

export function setCurrentOperation(val) {
  return {
    type: SET_CURRENT_OPERATION,
    payload: val
  }
}

export function doOperation(res) {
  return {
    type: DO_OPERATION,
    payload: res
  }
}
