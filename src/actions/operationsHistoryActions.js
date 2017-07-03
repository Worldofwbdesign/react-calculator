import { ADD_HISTORY_ITEM, UPDATE_OPERATION, CLEAR_OPERATION } from './types';

export function addHistoryItem(item) {
  console.log(item);
  return {
    type: ADD_HISTORY_ITEM,
    payload: item
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
