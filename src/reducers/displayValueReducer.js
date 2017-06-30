import { CHANGE_DISPLAY_VALUE } from '../actions/types';

export default (state = 0, action) => {
  switch (action.type) {
    case CHANGE_DISPLAY_VALUE:
      return state === 0 ? action.payload : state + action.payload;
    default:
      return state;
  }
}
