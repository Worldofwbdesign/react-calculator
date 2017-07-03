import { CHANGE_DISPLAY_VALUE, DELETE_LAST_DIGIT, CLEAR_DISPLAY_VALUE, CHANGE_SIGN, ADD_DOT, DO_OPERATION } from '../actions/types';

export default (state = '0', action) => {
  switch (action.type) {
    case CHANGE_DISPLAY_VALUE:
      return state === '0' ? action.payload : state + action.payload;
    case CLEAR_DISPLAY_VALUE:
      return '0';
    case DELETE_LAST_DIGIT:
      return state.length === 1 ? '0' : state.slice(0, -1);
    case CHANGE_SIGN:
      return state.charAt(0) === '-' ? state.substr(1) : '-' + state;
    case ADD_DOT:
      if (!(/\./).test(state)) {
        return state + '.';
      }
    case DO_OPERATION:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
