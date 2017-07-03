import { ADD_HISTORY_ITEM } from '../actions/types';

export default (state = [], action) => {
  switch(action.type) {
    case ADD_HISTORY_ITEM:
      console.log(state, action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
}
