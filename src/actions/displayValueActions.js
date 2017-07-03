import { CHANGE_DISPLAY_VALUE, DELETE_LAST_DIGIT, CLEAR_DISPLAY_VALUE, CHANGE_SIGN, ADD_DOT} from './types';
import { onWaitingSecond, offWaitingSecond } from './waitingSecondNumberActions';

export function executeDisplayValue(val) {
  return (dispatch, getState) => {
    const { waitingSecondNumber } = getState();
    if (waitingSecondNumber) {
      dispatch(clearDisplayValue());
      dispatch(offWaitingSecond());
    }
    dispatch(changeDisplayValue(val));
  }
}

export function changeDisplayValue(val) {
  return {
    type: CHANGE_DISPLAY_VALUE,
    payload: val
  }
}

export function clearDisplayValue() {
  return {
    type: CLEAR_DISPLAY_VALUE
  }
}

export function deleteLastDigit() {
  return {
    type: DELETE_LAST_DIGIT
  }
}

export function changeSign() {
  return {
    type: CHANGE_SIGN
  }
}

export function addDot() {
  return {
    type: ADD_DOT
  }
}
