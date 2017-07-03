import { setLastValue } from './lastValueActions';
import { setPrevValue } from './valueActions';
import { clearDisplayValue } from './displayValueActions';
import { offWaitingSecond } from './waitingSecondNumberActions';

export function clearState() {
  return (dispatch) => {
    dispatch(setLastValue(null));
    dispatch(setPrevValue(null));
    dispatch(clearDisplayValue());
    dispatch(offWaitingSecond());
  }
}
