import { MEMORY_CHANGE, MEMORY_PLUS, MEMORY_MINUS, MEMORY_CLEAR } from '../actions/types';

export default (state = 0, action) => {
  switch(action.type) {
    case MEMORY_CHANGE:
      return action.payload;
    case MEMORY_PLUS:
      return state + action.payload;
    case MEMORY_MINUS:
      return state - action.payload;
    case MEMORY_CLEAR:
      return 0;
    default:
      return state;
  }
}
