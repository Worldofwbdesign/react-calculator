import { SET_PREV_VALUE } from './types';

export function setPrevValue(val) {
  return {
    type: SET_PREV_VALUE,
    payload: val
  }
}
