import { clearDisplayValue } from './displayValueActions';
import { offWaitingSecond } from './waitingSecondNumberActions';
import { clearOperation } from './operationsHistoryActions';

export function clearState() {
  return (dispatch) => {
    dispatch(clearDisplayValue());
    dispatch(offWaitingSecond());
    dispatch(clearOperation());
  }
}
