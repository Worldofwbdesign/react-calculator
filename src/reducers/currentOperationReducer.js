import { UPDATE_OPERATION, CLEAR_OPERATION } from '../actions/types';

export default (state = '', action) => {
  switch(action.type) {
    case UPDATE_OPERATION:
      return (String(state + ' ' + action.payload));
    case CLEAR_OPERATION:
      return '';
    default:
      return state;
  }
}
