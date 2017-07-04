import { ACTIVATE_READY_RESULT, DISACTIVATE_READY_RESULT } from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case ACTIVATE_READY_RESULT:
      return true;
    case DISACTIVATE_READY_RESULT:
      return false;
    default:
      return state;
  }
}
