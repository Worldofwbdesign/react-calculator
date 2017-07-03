import { SET_PREV_VALUE } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SET_PREV_VALUE:
      return action.payload;
    default:
      return state;
  }
}
