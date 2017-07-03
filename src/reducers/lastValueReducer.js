import { SET_LAST_VALUE } from '../actions/types';

export default (state = null, action) => {
  switch(action.type) {
    case SET_LAST_VALUE:
      return action.payload;
    default:
      return state
  }
}
