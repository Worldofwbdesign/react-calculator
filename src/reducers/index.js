import { combineReducers } from 'redux';
import displayValueReducer from './displayValueReducer';
import stateMathOperationReducer from './stateMathOperationReducer';
import waitingSecondNumberReducer from './waitingSecondNumberReducer';
import operationsHistoryReducer from './operationsHistoryReducer';
import currentOperationReducer from './currentOperationReducer';
import memoryValueReducer from './memoryValueReducer';
import currentOperationFunctionReducer from './currentOperationFunctionReducer';
import resultIsReadyReducer from './resultIsReadyReducer';

const rootReducer = combineReducers({
  displayValue: displayValueReducer,
  stateMathOperation: stateMathOperationReducer,
  operationsHistory: operationsHistoryReducer,
  currentOperation: currentOperationReducer,
  memoryValue: memoryValueReducer,
  waitingSecondNumber: waitingSecondNumberReducer,
  currentOperationFunction: currentOperationFunctionReducer,
  resultIsReady: resultIsReadyReducer
});

export default rootReducer;
