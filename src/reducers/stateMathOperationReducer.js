import { SET_STATE_MATH_OPERATION } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case SET_STATE_MATH_OPERATION:
      return action.payload
    default:
      return state;
  }
}
