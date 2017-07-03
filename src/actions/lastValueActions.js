import { SET_LAST_VALUE } from './types';

export function setLastValue(val) {
  return {
    type: SET_LAST_VALUE,
    payload: val
  }
}
