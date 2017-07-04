import { ADD_HISTORY_ITEM, CLEAR_HISTORY } from '../actions/types';

export default (state = [], action) => {
  switch(action.type) {
    case ADD_HISTORY_ITEM:
      return [...state, action.payload];
    case CLEAR_HISTORY:
      return [];
    default:
      return state;
  }
}
