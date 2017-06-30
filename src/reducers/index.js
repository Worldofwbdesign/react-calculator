import { combineReducers } from 'redux';
import displayValueReducer from './displayValueReducer';

const rootReducer = combineReducers({
  displayValue: displayValueReducer,
});

export default rootReducer;
