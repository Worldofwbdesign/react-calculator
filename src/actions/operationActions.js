import { DO_OPERATION, CHANGE_CURRENT_OPERATION, SET_CURRENT_OPERATION, SET_STATE_MATH_OPERATION, CONVERT_OPERATION } from './types';
import { onWaitingSecond, offWaitingSecond } from './waitingSecondNumberActions';
import { updateOperation, addHistoryItem, clearOperation } from './operationsHistoryActions';
import { activateReadyResult, disactivateReadyResult } from './resultIsReadyActions';

// execute arithmetic operations
export function executeOperation(operation) {
  return (dispatch, getState) => {
    const { displayValue, resultIsReady, currentOperation, stateMathOperation, waitingSecondNumber,  } = getState();

    // If first number wasn't provided and display is clear - do nothing
    if (!waitingSecondNumber && displayValue === '0') {
      return;
    }

    // Log current operation on display
    dispatch(updateOperation(` ${displayValue} ${operation}`));

    if (resultIsReady) {
      // if result is ready clear current operation
      // and set current operation function as display value
      dispatch(setCurrentOperation(displayValue));
      dispatch(clearOperation());
      dispatch(updateOperation(` ${displayValue} ${operation}`));
    }

    if (operation !== '=') {
      // Update current operation function on arithmetics buttons push
      if (!waitingSecondNumber && resultIsReady) {
        // If first number wasn't provided - set current operation on display
        dispatch(setCurrentOperation(displayValue + operation));
      } else {
        // update current operation on display
        dispatch(changeCurrentOperation(displayValue + operation));
      }
      dispatch(setStateMathOperation(operation));
      dispatch(onWaitingSecond());
      dispatch(disactivateReadyResult());

    } else {
      // Convert operation on "=" button push
      if (resultIsReady) {
        // If "=" button pushed one after another, do previous operation
        const currentOperationArray = currentOperation.split(' ');
        const lastOperand = currentOperationArray[currentOperationArray.length - 2];
        if (stateMathOperation) {
          dispatch(setCurrentOperation(displayValue + stateMathOperation + lastOperand));
          // and clear and update current operation on display
          dispatch(clearOperation());
          dispatch(updateOperation(` ${displayValue} ${stateMathOperation} ${lastOperand} =`));
        } else {
          return;
        }

      } else {
        dispatch(changeCurrentOperation(displayValue));
      }
      dispatch(convertOperation());
      dispatch(activateReadyResult());

    }
  }
}

// convert current operation and do it
export function convertOperation() {
  return (dispatch, getState) => {
    const { currentOperationFunction, currentOperation } = getState();
    const operation = new Function('currentOperationFunction', 'return ' + currentOperationFunction);
    const res = operation(currentOperationFunction);
    dispatch(doOperation(String(res)));
    dispatch(setCurrentOperation(String(res)));
    dispatch(addHistoryItem(`${currentOperation} ${res}`));
  }
}

// update current operation to calculate
export function changeCurrentOperation(val) {
  return {
    type: CHANGE_CURRENT_OPERATION,
    payload: val
  }
}

// set new operation to calculate
export function setCurrentOperation(val) {
  return {
    type: SET_CURRENT_OPERATION,
    payload: val
  }
}

export function setStateMathOperation(mathOperation) {
  return {
    type: SET_STATE_MATH_OPERATION,
    payload: mathOperation
  }
}

// Do operation and display on screen
export function doOperation(res) {
  return {
    type: DO_OPERATION,
    payload: res
  }
}
