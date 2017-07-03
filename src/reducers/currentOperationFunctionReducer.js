import { CHANGE_CURRENT_OPERATION, SET_CURRENT_OPERATION } from '../actions/types';

export default (state = '', action) => {
  switch(action.type) {
    case CHANGE_CURRENT_OPERATION:
      return state + action.payload;
    case SET_CURRENT_OPERATION:
      return action.payload;
    default:
      return state;
  }
}
