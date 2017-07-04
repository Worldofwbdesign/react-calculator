import { ADD_HISTORY_ITEM, UPDATE_OPERATION, CLEAR_OPERATION, CLEAR_HISTORY } from './types';

export function addHistoryItem(item) {
  return {
    type: ADD_HISTORY_ITEM,
    payload: item
  }
}

export function clearHistory(item) {
  return {
    type: CLEAR_HISTORY,
  }
}

export function updateOperation(operand) {
  return {
    type: UPDATE_OPERATION,
    payload: operand
  }
}

export function clearOperation() {
  return {
    type: CLEAR_OPERATION
  }
}
