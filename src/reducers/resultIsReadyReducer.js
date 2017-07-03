import { TOGGLE_READY_RESULT } from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_READY_RESULT:
      return true;
    default:
      return state;
  }
}
