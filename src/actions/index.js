import { clearDisplayValue } from './displayValueActions';
import { offWaitingSecond } from './waitingSecondNumberActions';

export function clearState() {
  return (dispatch) => {
    dispatch(clearDisplayValue());
    dispatch(offWaitingSecond());
  }
}
