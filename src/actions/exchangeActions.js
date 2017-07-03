import { doOperation } from './operationActions';
import { onWaitingSecond } from './waitingSecondNumberActions';
import { addHistoryItem } from './operationsHistoryActions';

export function doExchangeOperation(operation, rate) {
  return (dispatch, getState) => {
    const displayValue = parseFloat(getState().displayValue);
    const actualRate = parseFloat(rate);
    const getRes = (displayValue, actualRate) => displayValue * actualRate;
    const res = getRes(displayValue, actualRate);

    dispatch(addHistoryItem(`${displayValue} UAH = ${res} ${operation}`));
    dispatch(doOperation(String(res)));
    dispatch(onWaitingSecond());
  }

}
