import { MEMORY_CHANGE, MEMORY_PLUS, MEMORY_MINUS, MEMORY_CLEAR } from './types';
import { doOperation } from './operationActions';

export function memoryChange() {
  return (dispatch, getState) => {
    const value = parseFloat(getState().displayValue);
    dispatch({
      type: MEMORY_CHANGE,
      payload: value
    });
  }
}

export function memoryPlus() {
  return (dispatch, getState) => {
    const value = parseFloat(getState().displayValue);
    dispatch({
      type: MEMORY_PLUS,
      payload: value
    });
  }
}

export function memoryMinus() {
  return (dispatch, getState) => {
    const value = parseFloat(getState().displayValue);
    dispatch({
      type: MEMORY_MINUS,
      payload: value
    });
  }
}

export function memoryClear(val) {
  return {
    type: MEMORY_CLEAR,
  }
}

export function displayMemoryResult() {
  return (dispatch, getState) => {
    const { memoryValue } = getState();
    dispatch(doOperation(String(memoryValue)));
  }
}
