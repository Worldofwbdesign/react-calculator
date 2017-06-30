import { CHANGE_DISPLAY_VALUE } from './types';

export function changeDisplayValue(val) {
  return {
    type: CHANGE_DISPLAY_VALUE,
    payload: val
  }
}
