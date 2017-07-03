import { combineReducers } from 'redux';
import displayValueReducer from './displayValueReducer';
import prevValueReducer from './prevValueReducer';
import lastValueReducer from './lastValueReducer';
import operationReducer from './operationReducer';
import waitingSecondNumberReducer from './waitingSecondNumberReducer';
import operationsHistoryReducer from './operationsHistoryReducer';
import currentOperationReducer from './currentOperationReducer';
import memoryValueReducer from './memoryValueReducer';

const rootReducer = combineReducers({
  displayValue: displayValueReducer,
  prevValue: prevValueReducer,
  stateOperation: operationReducer,
  waitingSecondNumber: waitingSecondNumberReducer,
  lastValue: lastValueReducer,
  operationsHistory: operationsHistoryReducer,
  currentOperation: currentOperationReducer,
  memoryValue: memoryValueReducer,
});

export default rootReducer;
